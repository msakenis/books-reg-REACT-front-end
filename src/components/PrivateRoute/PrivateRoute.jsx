import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';

function PrivateRoute({ path, component }) {
  const auth = useContext(AuthContext);
  const [authorized, setAuth] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/verify`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => (res.ok ? setAuth(true) : setRedirect(true)))
      .catch((err) => {
        setRedirect(true);
      });
  }, [auth.token]);

  return (
    <>
      {auth.token && authorized && (
        <Route exact path={path} component={component} />
      )}

      {(!auth.token || redirect) && <Redirect to={{ pathname: '/login' }} />}
    </>
  );
}

export default PrivateRoute;
