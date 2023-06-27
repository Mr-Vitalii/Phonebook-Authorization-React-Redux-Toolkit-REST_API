import { DeleteButton, Item, List } from "./ContactList.styled";

import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "redux/selectors";
import { deleteContact } from "redux/operations";


const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(({ name, phone, id }) => (
        <Item key={id}>
          <div>
            <span>{name}: </span>
            <span>{phone}</span>
          </div>
          <DeleteButton onClick={() => handleDeleteContact(id)}>
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};

export { ContactList };
