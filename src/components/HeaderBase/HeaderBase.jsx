import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import { useHistory } from 'react-router-dom';
import * as S from './HeaderBase.style';

function HeaderBase() {
  const nav = [
    { id: 1, name: 'View Books', to: '/books' },
    { id: 2, name: 'Add Book', to: '/add-book' },
    { id: 3, name: 'New Users Stats', to: '/stats' },
  ];
  const auth = useContext(AuthContext);
  const selectedId = useContext(HighlightIdContext);
  const history = useHistory();

  return (
    <S.Header>
      <S.Actions>
        {nav.map((link) => (
          <S.StyledLink
            highlighted={
              selectedId.selectedId === link.id ? 'marked' : undefined
            }
            key={link.id}
            to={link.to}
          >
            {link.name}
          </S.StyledLink>
        ))}
      </S.Actions>
      <S.Button
        onClick={() => {
          auth.clearLocalStorage();
          auth.updateToken();
          history.push('/login');
        }}
      >
        Log out
      </S.Button>
    </S.Header>
  );
}

export default HeaderBase;
