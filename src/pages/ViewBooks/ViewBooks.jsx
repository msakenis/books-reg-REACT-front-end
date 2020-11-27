import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import { HeaderBase, Loading } from '../../components';
import * as S from './ViewBooks.style';

function ViewBooks() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState([]);
  const selectedId = useContext(HighlightIdContext);

  selectedId.setId(1);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/books`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [auth.token]);

  return (
    <>
      <S.ViewPage />

      <S.ViewBox>
        <HeaderBase />
        <S.BooksBox>
          {data ? (
            <S.Table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Author</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((row, index) => (
                    <tr>
                      <td>{index + 1}.</td>
                      <td>{row.author}</td>
                      <td>{row.title}</td>
                    </tr>
                  ))}
              </tbody>
            </S.Table>
          ) : (
            <Loading />
          )}
        </S.BooksBox>
      </S.ViewBox>
    </>
  );
}

export default ViewBooks;
