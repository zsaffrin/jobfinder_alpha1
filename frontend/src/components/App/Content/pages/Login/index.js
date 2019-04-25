import React from 'react';
import styled from 'styled-components';

import LoginOptionList from './LoginOptionList';

const Login = () => {
  const LoginPage = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100%;
  `;
  const ContentBox = styled.div`
    text-align: center;
    width: 24em;
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
