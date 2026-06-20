import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export default function VisitorForm() {

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
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          <label>Visitor Name:</label><br />
          <input
            type='text'
            name='visitorName'
            value={values.visitorName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { touched.visitorName && errors.visitorName && <p style={{ color: 'red' }}>{errors.visitorName}</p>}
          <br />

          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { touched.email && errors.email && <p style={{ color: 'red' }}>{errors.email}</p> }
          <br />

          <label>Mobile Number:</label><br />
          <input
            type="number"
            name="mobileNumber"
            value={values.mobileNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { touched.mobileNumber && errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p> }
          <br />

          <label>Department to Visit:</label><br />
          <select 
            name="department"
            value={values.department}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Finance">Finance</option>
            <option value="Admin">Admin</option>
          </select>
          { touched.department && errors.department && <p style={{ color: 'red' }}>{errors.department}</p> }
          <br />

          <label>Visit Date:</label><br />
          <input 
            type="date" 
            name="visitDate"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { touched.visitDate && errors.visitDate && <p style={{ color: 'red' }}>{errors.visitDate}</p> }
          <br />

          <label>Purpose of Visit:</label><br />
          <textarea 
            name="purpose"
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          { touched.purpose && errors.purpose && <p style={{ color: 'red' }}>{errors.purpose}</p> }
          <br />

          <label>Visitor Type</label><br />
          <input 
            type="radio"
            name="visitorType"
            value="Interview Candidate"
            onChange={handleChange}
            onBlur={handleBlur}
          /> Interview Candidate
          <input 
            type="radio"
            name="visitorType"
            value="Vendor"
            onChange={handleChange}
            onBlur={handleBlur}
          /> Vendor
          <input 
            type="radio"
            name="visitorType"
            value="Guest"
            onChange={handleChange}
            onBlur={handleBlur}
          /> Guest
          <br />

          <label>Need Parking:  </label>
          <input 
            type="checkbox"
            name="needParking"
            checked={values.needParking}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />

          <label>Accept Terms and Conditions:</label>
          <input 
            type="checkbox"
            name="acceptTerms"
            checked={values.acceptTerms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { touched.acceptTerms && errors.acceptTerms && <p style={{ color: 'red' }}>{errors.acceptTerms}</p> }
          <br />

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  )
}
