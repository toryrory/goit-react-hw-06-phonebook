import { Container, Section1, Section2 } from './App.styled';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export function App() {
  return (
    <Container>
      <Section1>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section1>
      <Section2>
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
      </Section2>
    </Container>
  );
}
