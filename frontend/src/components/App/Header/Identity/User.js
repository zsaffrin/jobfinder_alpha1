import React from 'react';
import styled from 'styled-components';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { firebase } from '../../../../firebase';

const User = () => {
  const ClickableDiv = styled.div(({ theme }) => {
    const { colors, space } = theme;
    return `
      color: inherit;
      cursor: pointer;
      padding: ${space.sm} ${space.md};
      text-decoration: none;

      &:hover {
        color: ${colors.blue[5]};
      }
    `;
  });

  return (
    <ClickableDiv role="button" onClick={() => firebase.auth().signOut()}>
      <FirebaseAuthConsumer>
        {({ user }) => user.displayName}
      </FirebaseAuthConsumer>
    </ClickableDiv>
  );
};

export default User;
