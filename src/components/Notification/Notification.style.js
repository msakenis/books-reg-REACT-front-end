import styled from 'styled-components';

export const NotificationText = styled.h3`
  color: #fff;
  background-color: ${(props) =>
    props.type === 'error' ? '#ed7a6d' : '#98d380'};
  text-align: center;
  margin: 0;
  border-radius: 10px;
  padding: 1em 0.5em;
`;
