import React, { useState } from 'react';
import { InputField, Button, Notification } from '../';

import * as S from './FormTemplate.style';

function FormTemplate({
  fields,
  callback,
  notifType,
  error,
  errorMessage,
  buttonName,
  formTitle,
  loginNotif,
}) {
  const [fieldValues, setFieldValues] = useState({});

  return (
    <>
      {error && notifType && (
        <Notification
          message={errorMessage}
          type={notifType}
          loginNotif={loginNotif}
        />
      )}

      <S.FormTitle>{formTitle}</S.FormTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          callback(fieldValues);
        }}
      >
        {fields.map((field) => (
          <InputField
            inputId={field.name}
            key={field.name}
            name={field.name}
            type={field.type}
            label={field.labelText}
            required={field.required}
            minLength={field.minLength}
            maxLength={field.maxLength}
            handleChange={(e) =>
              setFieldValues({ ...fieldValues, [field.name]: e.target.value })
            }
          />
        ))}
        <Button color="primary" type="submit">
          {buttonName}
        </Button>
      </form>
    </>
  );
}

export default FormTemplate;
