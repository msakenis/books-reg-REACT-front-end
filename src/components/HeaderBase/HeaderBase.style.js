import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: #26282c;
  flex: 2;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 20%;
`;

export const Actions = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: #999;
  font-size: 1em;
  text-decoration: none;
  padding: 2.3em;
  cursor: pointer;
  background: ${(props) =>
    props.highlighted === 'marked'
      ? props.theme.primaryHover.background
      : 'unset'};
  &:hover {
    color: ${(props) => props.theme.primaryHover.color};
    background: ${(props) => props.theme.primaryHover.background};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1em;
  background-color: #666;
  color: #fff;
  border: none;
  cursor: pointer;
  &&:hover {
    color: ${(props) => props.theme.primaryHover.color};
    background: ${(props) => props.theme.primaryHover.background};
  }
`;
