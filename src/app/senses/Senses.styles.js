import styled from 'styled-components';

export const SensesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const AppItems = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;

export const AppItemsCenteredBoxes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppItemWrapper = styled.div`
  width: 70%;
  height: 70%;
  background-color: #2d3247;
  border-radius: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:hover {
    background-color: #363b50;
  }
  img {
    filter: brightness(0) invert(1);
    max-width: 60%;
    max-height: 70%;
  }

  @media screen and (orientation: landscape) {
    width: 35%;
    img {
      max-width: 40%;
      max-height: 70%;
    }
  }
`;
