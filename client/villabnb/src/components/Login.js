// src/pages/Login.js
import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { loginUser } from '../services/authService'; // Make sure this path is correct
import * as Yup from 'yup';

// Validation schema for the form
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

function Login() {
  const handleSubmit = async (values) => {
    try {
      const data = await loginUser(values); // Use the loginUser function
      // Handle login success or failure
      console.log(data);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
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
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Login;
