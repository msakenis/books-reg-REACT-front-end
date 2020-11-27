import React, { useState, useContext } from 'react';
import { FormTemplate } from '../../components';
import { useHistory, Redirect } from 'react-router-dom';
import { registration } from '../../utils/formData';
import * as S from './Login.style';
import { AuthContext } from '../../contexts/Auth.context';

function loginTo(
  fieldValues,
  setError,
  setErrorMessage,
  setNotifType,
  token,
  history,
  error
) {
  error = false;
  fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
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
        token.updateToken('Bearer ' + data.token);
        history.push('/books');
      }
    })
    .catch((err) => {
      setError(true);
      setNotifType('error');
      setErrorMessage(err.message);
    });
}

function Login() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const token = useContext(AuthContext);
  const history = useHistory();

  return (
    <>
      {token.token ? (
        <Redirect to={{ pathname: '/books' }} />
      ) : (
        <>
          <S.LoginPage></S.LoginPage>

          <S.LoginBox>
            <FormTemplate
              callback={(fieldValues) =>
                loginTo(
                  fieldValues,
                  setError,
                  setErrorMessage,
                  setNotifType,
                  token,
                  history,
                  error
                )
              }
              fields={registration}
              errorMessage={errorMessage}
              error={error}
              notifType={notifType}
              buttonName="Login"
              formTitle="Login"
            />
            <S.TextBox>
              Dont have account?{' '}
              <S.StyledLink to="/register">Sign up</S.StyledLink>
            </S.TextBox>
          </S.LoginBox>
        </>
      )}
    </>
  );
}

export default Login;
