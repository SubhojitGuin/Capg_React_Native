import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export default function FormikYupDemo() {

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });

  return (
    <div>
      <h2>Formik with Yup Validation</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert("Form submitted successfully!");
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
          <form onSubmit={handleSubmit} >
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            <br />
            <label>Email:</label><br />
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            <br />
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}
