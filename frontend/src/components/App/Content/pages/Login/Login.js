import React from 'react';
import { Redirect } from '@reach/router';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebase } from '../../../../../firebase';

import ContentBox from './ContentBox';
import LoginOptionList from './LoginOptionList';

const Login = () => {
  const { user } = useAuthState(firebase.auth());

  if (user !== null) return <Redirect to="/" />;

  const LoginPage = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100%;
  `;

  return (
    <LoginPage>
      <ContentBox>
        <p>Oh, hey!</p>
        <p>
          This app remembers listings you&apos;ve viewed, listed, applied to,
          etc. To do that, it needs to know who you are.
        </p>
        <p>Please log in using one of the methods below</p>
        <LoginOptionList />
      </ContentBox>
    </LoginPage>
  );
};

export default Login;
