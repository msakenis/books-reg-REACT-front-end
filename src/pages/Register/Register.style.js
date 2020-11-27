import styled from 'styled-components';

export const RegPage = styled.div`
  background: url('https://www.incimages.com/uploaded_files/image/1920x1080/GettyImages-900301626_437925.jpg')
    no-repeat fixed;

  background-size: cover;
  background-position: center center;
  filter: blur(6px);
  -webkit-filter: blur(6px);
  height: 100vh;
  box-sizing: border-box;
`;

export const RegBox = styled.div`
  min-width: 40%;
  background-color: #fff;
  opacity: 0.8;
  padding: 3em;
  min-height: 50vh;
  border-radius: 10px;
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 2;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
`;
