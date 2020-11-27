import React from 'react';
import * as S from './Button.style';
function Button({ children, handleClick, color, type }) {
  return (
    <S.Button onClick={handleClick} type={type} color={color}>
      {children}
    </S.Button>
  );
}

export default Button;
