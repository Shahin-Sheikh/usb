import { Box, Button, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Form, Formik } from 'formik';
import React from 'react';
import { LabelWithInput } from '../components';

const Login = () => {
  const handleSubmit = async (values, formik) => {
    console.log('Submitted...', values);
  };
  return (
    <Box
      component="div"
      id="login"
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '  url(pattern.svg) right top no-repeat',
      }}
    >
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 0.35)',
          boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.17 )',
          backdropFilter: 'blur(25px) saturate(200%)',
          borderRadius: '12px',
          border: '1px solid rgba(209, 213, 219, 0.3)',
          height: '500px',
          width: {
            xs: '95%',
            md: '500px',
          },
        }}
      >
        <Box p={4}>
          <Typography variant="h3" color={blue[700]} mt={2} letterSpacing={0.5}>
            Login to your Account
          </Typography>

          <Box mt={5}>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <Stack direction={'column'} spacing={3}>
                  <LabelWithInput
                    labelName={'Please type your Email'}
                    name="email"
                    type={'email'}
                    placeHolder="Email"
                  />
                  <LabelWithInput
                    name={'password'}
                    labelName="Enter your password"
                    placeHolder="Password"
                    type="password"
                  />

                  <Box paddingTop={'30px'} width="100%">
                    <Button
                      variant="contained"
                      sx={{
                        width: '100%',
                        paddingY: '15px',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: 14,
                        letterSpacing: '1px',
                      }}
                      type="submit"
                    >
                      Login Now
                    </Button>
                  </Box>
                </Stack>
              </Form>
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
