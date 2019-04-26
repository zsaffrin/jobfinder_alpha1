import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loginWithGoogle } from '../../../../../utils/authUtils';

const LoginOptionItem = ({ icon, title }) => {
  const OptionItem = styled.li(({ theme }) => {
    const { colors, space } = theme;
    return `
      border: 1px solid #999;
      border-radius: 7px;
      cursor: pointer;
      display: grid;
      grid-gap: ${space.md};
      grid-template-columns: auto auto;
      align-item: center;
      justify-content: center;
      padding: ${space.lg};

      &:hover {
        background: ${colors.blue[0]};
      }
    `;
  });

  return (
    <OptionItem role="button" onClick={loginWithGoogle}>
      <FontAwesomeIcon icon={icon} />
      <div>{title}</div>
    </OptionItem>
  );
};

export default LoginOptionItem;
