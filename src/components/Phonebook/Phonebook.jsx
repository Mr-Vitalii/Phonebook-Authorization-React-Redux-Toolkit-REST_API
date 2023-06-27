import { ContactForm } from "../ContactForm/ContactForm ";
import { Section } from "../Section/Section";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { ContactsTitle } from "./Phonebook.styled";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError } from "redux/selectors";

const Phonebook = () => {

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Section message="Phonebook">
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Section>
  );
};

export { Phonebook };
