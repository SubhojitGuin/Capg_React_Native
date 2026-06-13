import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createRequest } from '../services/RequestService';
import { fetchCategories } from '../services/CategoryService';
import useAuthContext from '../hooks/useAuthContext';

export default function CreateRequestForm() {

  const [categories, setCategories] = React.useState([]);
  const { user } = useAuthContext();

  React.useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data));
  }, []);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .trim()
      .required('Title is required, it cannot be blank')
      .min(5, 'Title must be at least 5 characters')
      .max(100, 'Title cannot exceed 100 characters'),

    description: Yup.string()
      .trim()
      .required('Description is required, it cannot be blank')
      .min(10, 'Description must be at least 10 characters')
      .max(1000, 'Description cannot exceed 1000 characters'),
      
    category: Yup.string()
      .required('Category is required')
      .oneOf(categories.map(c => c.name), 'Invalid category selected'),

    roomNo: Yup.string()
      .trim()
      .required('Room number is required, it cannot be blank')
      .matches(/^[A-Z]-\d{3}$/, 'Room number must be of the format A-123'),
      
    priority: Yup.string()
      .required('Priority is required')
      .oneOf(['Low', 'Medium', 'High'], 'Invalid priority value')
  });

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        category: '',
        roomNo: '',
        priority: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {

        const formData = {
          ...values, 
          status: 'Open', 
          createdAt: new Date().toISOString().split('T')[0],
          studentId: user.id,
          studentName: user.name
        };

        createRequest(formData)
          .then(() => {
            alert('Request created successfully!');
            resetForm();
          })
          .catch(() => {
            alert('Failed to create request. Please try again.');
          })
          .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form className="container mt-4 mb-2 bg-light p-4 border rounded-3">
          <div>
            <h2 className="fw-bold">Create Maintainance Request</h2>
            <p className="text-muted"></p>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Title</label>
            <Field type="text" name="title" placeholder="Title" className="form-control" />
            <ErrorMessage name="title" component="div" className="form-error-message" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <Field as="textarea" name="description" placeholder="Description" className="form-control" rows="4" />
            <ErrorMessage name="description" component="div" className="form-error-message" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Category</label>
            <Field as="select" name="category" className="form-select">
              <option value="">Select Category</option>
              {categories.map(({name}) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" className="form-error-message" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Room Number</label>
            <Field type="text" name="roomNo" placeholder="Room Number" className="form-control" />
            <ErrorMessage name="roomNo" component="div" className="form-error-message" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Priority</label>
            <Field as="select" name="priority" className="form-select">
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Field>
            <ErrorMessage name="priority" component="div" className="form-error-message" />
          </div>

          
          <div className="mt-4 text-center">
            <button type="submit" disabled={isSubmitting} className="btn btn-success">
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
