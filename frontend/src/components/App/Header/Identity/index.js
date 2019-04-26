import React from 'react';
import styled from 'styled-components';
import { FirebaseAuthConsumer } from '@react-firebase/auth';

import Login from './Login';
import User from './User';

const Identity = () => {
  const IdentityDiv = styled.div(({ theme }) => {
    const { colors } = theme;
    return `
      display: grid;
      align-items: center;

      &:hover {
        background: ${colors.blue[3]};
        color: ${colors.blue[5]};
      }
    `;
  });

  return (
    <IdentityDiv>
      <FirebaseAuthConsumer>
        {({ isSignedIn }) => (isSignedIn ? <User /> : <Login />)}
      </FirebaseAuthConsumer>
    </IdentityDiv>
  );
};

export default Identity;
