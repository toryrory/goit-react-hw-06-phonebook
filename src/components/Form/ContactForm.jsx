import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { Label, Input, Button, Form } from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newName = e.target.elements.name.value;
    const newNumber = e.target.elements.number.value;
    const searchedName = contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
    if (searchedName) {
      alert(`${newName} is already in contact`);
    } else {
      dispatch(addContact(newName, newNumber));
    }
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  //  const getFormSubmitData = (newName, number) => {
  //    const searchedName = contacts.find(
  //      ({ name }) => name.toLowerCase() === newName.toLowerCase()
  //    );
  //    if (searchedName) {
  //      alert(`${newName} is already in contact`);
  //    } else {
  //      setContacts(prevState => [
  //        ...prevState,
  //        { id: nextId(), name: newName, number: number },
  //      ]);
  //    }
  //  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Phone number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </Form>
    </>
  );
}

//   class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onFormSubmit(this.state);
//         this.reset();
//   }
//     reset = () => {
//     this.setState({name: '', number: ''})
// }
//   render() {
//       const { name, number } = this.state;
//     return (
//       <>
//         <Form onSubmit={this.handleSubmit}>
//           <Label>
//             Name
//             <Input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleInputChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </Label>
//           <Label>
//             Phone number
//             <Input
//               type="tel"
//               name="number"
//               value={number}
//               onChange={this.handleInputChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </Label>
//           <Button type="submit" disabled={!name || !number}>Add contact</Button>
//         </Form>
//       </>
//     );
//   }
// }
