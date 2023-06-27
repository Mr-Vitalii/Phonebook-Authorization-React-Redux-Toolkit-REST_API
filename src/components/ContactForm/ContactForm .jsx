import { useDispatch } from "react-redux";
import { addContact } from "redux/operations";

import { Formik } from "formik";
import { object, string } from "yup";
import {
  Button,
  ContactsForm,
  FormError,
  Input,
  InputContainer,
} from "./ContactForm .styled";

const initialValues = {
  name: "",
  phone: "",
};

let userSchema = object({
  name: string()
    .required()
    .matches(
      /^[a-zA-Za-zA-Z]+(([' -][a-zA-Za-zA-Z ])?[a-zA-Za-zA-Z]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  phone: string()
    .required()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    ),
});

const ContactForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <ContactsForm>
        <InputContainer>
          <label>
            Name:
            <Input type="text" name="name" />
            <FormError name="name" component="p" />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Phone:
            <Input type="tel" name="phone" />
          </label>
          <FormError name="phone" component="p" />
        </InputContainer>

        <Button type="submit">Add contact</Button>
      </ContactsForm>
    </Formik>
  );
};


export { ContactForm };
