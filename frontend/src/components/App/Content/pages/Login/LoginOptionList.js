import React from 'react';
import styled from 'styled-components';

import LoginOptionItem from './LoginOptionItem';

const LoginOptionList = () => {
  const OptionList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
  `;

  return (
    <OptionList>
      <LoginOptionItem icon={['fab', 'google']} title="Google" />
    </OptionList>
  );
};

export default LoginOptionList;
