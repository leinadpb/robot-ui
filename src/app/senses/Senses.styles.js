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
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
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

export const TurnOffOnWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TurnOn = styled.div`
  margin: 2x;
  padding: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  span {
    font-size: 1.5rem;
    color: white;
  }
`;

export const TurnOff = styled.div`
  margin: 2px;
  padding: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  span {
    font-size: 1.5rem;
    color: #8f0010;
  }
`;
