import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { FormTemplate } from '../../components';
import { registration } from '../../utils/formData';
import { AuthContext } from '../../contexts/Auth.context';

import * as S from './Register.style';

function registerTo(
  fieldValues,
  setError,
  setErrorMessage,
  setNotifType,
  error,
  setLoginNotif
) {
  error = false;
  fetch(`${process.env.REACT_APP_SERVER_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fieldValues),
  })
    .then((res) => {
      if (!res.ok) {
        error = true;
        setError(true);
        setNotifType('error');
      }
      return res.json();
    })
    .then((data) => {
      if (error) {
        setErrorMessage(data.msg || 'Error!');
      } else {
        setNotifType('success');
        setError(true);
        setErrorMessage(`${data.msg} Now you can login`);
        setLoginNotif(true);
      }
    })
    .catch((err) => {
      setError(true);
      setNotifType('error');
      setErrorMessage(err.message);
    });
}

function Register() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const [loginNotif, setLoginNotif] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <>
      {!auth.token ? (
        <>
          <S.RegPage></S.RegPage>

          <S.RegBox>
            <FormTemplate
              callback={(fieldValues) =>
                registerTo(
                  fieldValues,
                  setError,
                  setErrorMessage,
                  setNotifType,
                  error,
                  setLoginNotif
                )
              }
              fields={registration}
              errorMessage={errorMessage}
              error={error}
              notifType={notifType}
              buttonName="Register"
              formTitle="Register"
              loginNotif={loginNotif}
            />
          </S.RegBox>
        </>
      ) : (
        <Redirect to={{ pathname: '/books' }} />
      )}
    </>
  );
}

export default Register;
