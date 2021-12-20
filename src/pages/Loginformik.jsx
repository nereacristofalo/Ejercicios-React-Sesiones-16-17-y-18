import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Loginformik = () => {
  const initialCredentials = {
    name: '',
    email: '',
    password: '',
  };

  const onFormSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
    localStorage.setItem('credentials', JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={onFormSubmit}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="name">Name:</label>
            <Field id="name" name="name" type="name" placeholder="Jane" />
            {errors.name && touched.name && (
              <ErrorMessage name="name" component="div"></ErrorMessage>
            )}
            <label htmlFor="email">Email:</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}
            <label htmlFor="password">Password:</label>
            <Field
              id="password"
              name="password"
              placeholder="Doe"
              type="password"
            />
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}
            <button type="submit">Submit</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Loginformik;
