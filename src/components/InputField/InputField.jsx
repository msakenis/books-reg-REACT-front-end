import React from 'react';
import * as S from './InputField.style';

function InputField({
  label,
  name,
  handleChange,
  defaultValue,
  type,
  inputId,
  required,
  minLength,
  maxLength,
}) {
  switch (type) {
    case 'longtext':
      return (
        <S.InputDiv>
          <S.TextArea
            id={inputId}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            onChange={handleChange}
          >
            {defaultValue}
          </S.TextArea>
          <S.Label htmlFor={inputId}>{label}</S.Label>
        </S.InputDiv>
      );
    case 'email':
      return (
        <S.InputDiv>
          <S.InputField
            onChange={handleChange}
            id={inputId}
            name={name}
            type="email"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
          />
          <S.Label htmlFor={inputId}>{label}</S.Label>
        </S.InputDiv>
      );
    case 'password':
      return (
        <S.InputDiv>
          <S.InputField
            onChange={handleChange}
            id={inputId}
            name={name}
            type="password"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
          />
          <S.Label htmlFor={inputId}>{label}</S.Label>
        </S.InputDiv>
      );
    default:
      return (
        <S.InputDiv>
          <S.InputField
            onChange={handleChange}
            id={inputId}
            name={name}
            type="text"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
          />
          <S.Label htmlFor={inputId}>{label}</S.Label>
        </S.InputDiv>
      );
  }
}

export default InputField;
