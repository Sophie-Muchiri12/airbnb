// src/pages/Signup.js
import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { signupUser } from '../services/authService'; // Make sure this path is correct
import * as Yup from 'yup';

// Validation schema for the form
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function Signup() {
  const handleSubmit = async (values) => {
    try {
      const data = await signupUser(values); // Use the signupUser function
      // Handle signup success or failure
      console.log(data);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Signup</Typography>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <Field
              name="name"
              as={TextField}
              label="Name"
              fullWidth
              margin="normal"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <Field
              name="email"
              as={TextField}
              label="Email"
              fullWidth
              margin="normal"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <Field
              name="password"
              as={TextField}
              type="password"
              label="Password"
              fullWidth
              margin="normal"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Signup;
