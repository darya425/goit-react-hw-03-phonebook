import React, { Component } from 'react';
import styles from './App.module.css';
import shortId from 'shortid';

import Layout from './Components/Layout';
import Form from './Components/Form';
import ContactsList from './Components/ContacstList';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Davoria Paori', number: '123-56-89' },
      { id: 'id-6', name: 'Salvador Dali', number: '856-48-24' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsetContacts = JSON.parse(contacts);

    if (parsetContacts) {
      this.setState({ contacts: parsetContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContact = this.state.contacts;
    const prevContact = prevState.contacts;

    if (nextContact !== prevContact) {
      localStorage.setItem('contacts', JSON.stringify(nextContact));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: shortId.generate(),
      name,
      number,
    };

    const newContact = contact.name.toLowerCase();

    const savedContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact,
    );

    if (savedContacts) {
      alert(contact.name + ' is already in contacts.');
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteTodo = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibileContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    return (
      <Layout>
        <div className={styles.box}>
          <h1 className={styles.title}>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} />

          <h2 className={styles.contact}>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contactData={visibileContacts}
            onDeleteContact={this.deleteTodo}
          />
        </div>
      </Layout>
    );
  }
}

export default App;
