import React, { useState, useContext } from 'react';
import { FormTemplate, HeaderBase } from '../../components';
import { addBookFormData } from '../../utils/formData';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './AddBook.style';

function addBookTo(
  fieldValues,
  setError,
  setErrorMessage,
  setNotifType,
  error,
  token
) {
  error = false;
  fetch(`${process.env.REACT_APP_SERVER_URL}/add-book`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(fieldValues),
  })
    .then((res) => {
      if (res.ok) {
        setNotifType('success');
      } else {
        error = true;
        setNotifType('error');
      }
      return res.json();
    })
    .then((data) => {
      setError(true);
      setErrorMessage(data.msg || 'Error!');
    })
    .catch((err) => {
      setError(true);
      setNotifType('error');
      setErrorMessage(err.message);
    });
}

function AddBook() {
  const token = localStorage.getItem('token');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const selectedId = useContext(HighlightIdContext);

  selectedId.setId(2);
  return (
    <>
      <S.AddPage />
      <S.AddBox>
        <HeaderBase />
        <S.FormBox>
          <h3>To add a book enter information bellow:</h3>
          <FormTemplate
            callback={(fieldValues) =>
              addBookTo(
                fieldValues,
                setError,
                setErrorMessage,
                setNotifType,
                error,
                token
              )
            }
            fields={addBookFormData}
            errorMessage={errorMessage}
            error={error}
            notifType={notifType}
            buttonName="Add"
          />
        </S.FormBox>
      </S.AddBox>
    </>
  );
}

export default AddBook;
