import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Button, Form, Input, Label } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    dispatch(
      logIn({
        email: data.email,
        password: data.password,
      })
    );
    reset();
  };
  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Label className="form__label">
        Email
        <Input
          className="form__input"
          type="email"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="form__error">Fill in the field, please</p>
        )}
      </Label>
      <Label className="form__label">
        Password
        <Input
          className="form__input"
          type="password"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="form__error">Fill in the field, please</p>
        )}
      </Label>
      <Button className="form__button" type="submit">
        Log In
      </Button>
    </Form>
  );
};
