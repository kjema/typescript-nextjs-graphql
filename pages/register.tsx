import React from 'react';
import { Formik, Field } from 'formik';
import Layout from '../components/Layout';
import { InputField } from '../components/fields/InputField';
import { RegisterComponent } from '../generated/apolloComponents';

export default () => {
  return (
    <Layout title="Register page">
      <RegisterComponent>
        {register => (
          <Formik
            onSubmit={async data => {
              const response = await register({ variables: { data: data } });
              console.log(response);
            }}
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="firstName"
                  placeholder="firstName"
                  component={InputField}
                />
                <Field
                  name="lastName"
                  placeholder="lastName"
                  component={InputField}
                />
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                />
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  component={InputField}
                />
                <button type="submit">submit</button>
              </form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};
