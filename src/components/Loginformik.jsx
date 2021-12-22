import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Loginformik = () => {
  const history = useHistory();

  const initialCredentials = {
    email: '',
    password: '',
  };

  const onFormSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
    localStorage.setItem('credentials', JSON.stringify(values, null, 2));
    history.push('/dashboard');
  };

  return (
    <div>
      <h1>Sign In</h1>
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
              placeholder="Password"
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
