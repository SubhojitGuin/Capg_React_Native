import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export default function VisitorForm2() {

  const validationSchema = Yup.object().shape({
    visitorName: Yup.string()
        .required('Visitor Name is required')
        .min(3, 'Name must be at least 3 characters long'),

    email: Yup.string()
        .required('Email is required')
        .email('Enter a valid email address'),

    mobileNumber: Yup.string()
        .required('Mobile Number is required')
        .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
        .length(10, 'Mobile number must be exactly 10 digits long'),

    department: Yup.string()
        .required('Please select a department to visit'),

    visitDate: Yup.date()
        .required('Visit date is required'),

    purpose: Yup.string()
        .required('Purpose of visit is required')
        .min(10, 'Purpose must be at least 10 characters long'),

    visitorType: Yup.string()
        .required('Please select your visitor type'),

    needParking: Yup.boolean(),

    acceptTerms: Yup.boolean()
        .oneOf([true], 'You must accept the terms to submit your request')
  })

  return (
    <Formik
      initialValues={{
        visitorName: '',
        email: '',
        mobileNumber: '',
        department: '',
        visitDate: '',
        purpose: '',
        visitorType: '',
        needParking: false,
        acceptTerms: false
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert("Visitor request submitted successfully!");
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form className="container mt-4 mb-2 bg-light p-4 border rounded-3 shadow" style={{ maxWidth: '800px' }}>
          <div className="mb-4">
            <h1 className="text-center">Visitor Appointment Form</h1>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Visitor Name:</label>
            <Field type="text" name="visitorName" placeholder="Visitor Name" className="form-control" />
            <ErrorMessage name="visitorName" component="div" style={{ color: 'red' }} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email:</label>
            <Field type="text" name="email" placeholder="Email" className="form-control" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Mobile Number:</label>
            <Field type="text" name="mobileNumber" placeholder="Mobile Number" className="form-control" />
            <ErrorMessage name="mobileNumber" component="div" style={{ color: 'red' }} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Department to Visit:</label>
            <Field as="select" name="department" className="form-select">
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Engineering">Engineering</option>
              <option value="Finance">Finance</option>
              <option value="Admin">Admin</option>
            </Field>
            <ErrorMessage name="department" component="div" style={{ color: 'red' }} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Visit Date:</label>
            <Field type="date" name="visitDate" className="form-control" />
            <ErrorMessage name="visitDate" component="div" style={{ color: 'red' }} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Purpose of Visit:</label>
            <Field as="textarea" name="purpose" placeholder="Purpose of Visit" className="form-control" />
            <ErrorMessage name="purpose" component="div" style={{ color: 'red' }} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Visitor Type:</label>
            <div>
              <div className="form-check">
                <Field type="radio" name="visitorType" value="Interview Candidate" className="form-check-input" />
                <label className="form-check-label">Interview Candidate</label>
              </div>
              <div className="form-check">
                <Field type="radio" name="visitorType" value="Vendor" className="form-check-input" />
                <label className="form-check-label">Vendor</label>
              </div>
              <div className="form-check">
                <Field type="radio" name="visitorType" value="Guest" className="form-check-input" />
                <label className="form-check-label">Guest</label>
              </div>
            </div>
            <ErrorMessage name="visitorType" component="div" style={{ color: 'red' }} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Need Parking:</label>
            <div className="form-check">
              <Field type="checkbox" name="needParking" className="form-check-input" />
              <label className="form-check-label">Yes, I need parking</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Accept Terms and Conditions:</label>
            <div className="form-check">
              <Field type="checkbox" name="acceptTerms" className="form-check-input" />
              <label className="form-check-label">I accept the terms and conditions</label>
            </div>
            <ErrorMessage name="acceptTerms" component="div" style={{ color: 'red' }} />
          </div>

          <div className="m-4 text-center">
            <button type="submit" className="btn btn-success">Submit Request</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
