import React from 'react';
import { Formik } from 'formik';

export default function FormikDemo() {
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }} // Initial form values property must match the name attribute of input fields
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required';
          }
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
          }
          return errors;
        }}
        onSubmit={(values) => {
          alert("Form submitted successfully!");
          console.log(values);
        }}
        >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} >
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            <br />
            <label>Email:</label><br />
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            <br />
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
        </Formik>
    </div>
  )
}
