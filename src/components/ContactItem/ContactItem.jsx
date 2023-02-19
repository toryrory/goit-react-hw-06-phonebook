import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Form/ContactForm.styled';
import { Contact } from './ContactItem.styled';


export const ContactItem = ({ name, id, number}) => {
  const dispatch = useDispatch();

  return (
    <Contact key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};