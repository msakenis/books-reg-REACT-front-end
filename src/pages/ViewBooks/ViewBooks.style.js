import styled from 'styled-components';

export const ViewPage = styled.div`
  background: url('https://i.pinimg.com/originals/43/49/17/4349179021869a0ff7a4c4c422689cb2.jpg')
    no-repeat fixed;

  background-size: cover;
  background-position: center center;
  height: 100vh;
  box-sizing: border-box;
`;

export const ViewBox = styled.div`
  display: flex;
  min-width: 50%;
  background-color: #fff;
  opacity: 0.9;
  min-height: 50vh;
  border-radius: 10px;
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 2;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export const BooksBox = styled.div`
  flex: 5;
  padding: 2em;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  table-layout: fixed;

  && td,
  th {
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;
    word-wrap: break-word;
  }
  && tr:nth-child(even),
  thead {
    background: #f4f4f6;
  }
`;
