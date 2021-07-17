import React, { Component } from 'react';
import styles from './Form.module.css';
import shortId from 'shortid';

class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  nameImputId = shortId.generate();
  numberImputId = shortId.generate();

  handleInputName = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameImputId} className={styles.name}>
          Name
        </label>
        <input
          id={this.nameImputId}
          className={styles.name_input}
          type="text"
          autoComplete="off"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={this.handleInputName}
          required
        />

        <label htmlFor={this.numberImputId} className={styles.name}>
          Phone number
        </label>
        <input
          id={this.numberImputId}
          className={styles.name_input}
          type="tel"
          autoComplete="off"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={this.handleInputName}
          required
        />

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
