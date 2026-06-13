import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import getDashboardRoute from '../utils/getDashboardRoute';

export default function LoginForm() {

  const navigate = useNavigate();
  const { login } = useAuthContext();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email('Invalid email format')
      .required('Email is required, it cannot be blank'),

    password: Yup.string()
      .trim()
      .required('Password is required, it cannot be blank')
      .min(4, 'Password must be at least 4 characters')
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          login(values.email, values.password)
            .then((user) => {
              console.log('Login successful in Login Form:', user);
              alert(`Welcome, ${user.name}!`);
              resetForm();
              navigate(getDashboardRoute(user.role));
            })
            .catch((error) => {
              alert('Login failed: ' + error.message);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-50 mx-auto border p-4 rounded mt-5 bg-white shadow rounded-3">
            <h2 className="mb-4">Login</h2>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <Field type="email" name="email" placeholder="Enter your email" className="form-control" />
              <ErrorMessage name="email" component="div" className="form-error-message" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Password</label>
              <Field type="password" name="password" placeholder="Enter your password" className="form-control" />
              <ErrorMessage name="password" component="div" className="form-error-message" />
            </div>

            <div className="mt-4 text-center">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
