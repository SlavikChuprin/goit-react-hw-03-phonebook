import React, { Component } from 'react';
import './App.css';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  submitFromForm = data => {
    const { name } = data;
    const nameAlreadyIs = this.state.contacts.find(
      contact => contact.name === name,
    );

    if (nameAlreadyIs) {
      alert(`${name} is already in contacts`);
      return;
    }
    data.id = uuidv4();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const newContactsArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );

    return newContactsArr;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const onVisibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.submitFromForm} />
        <h2> Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          visibleContacts={onVisibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
