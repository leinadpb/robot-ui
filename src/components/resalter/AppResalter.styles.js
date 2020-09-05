import styled from 'styled-components';

export const AppResalterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppResalterModal = styled.div`
  height: 50vh;
  width: 70vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResalterContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 7fr 6fr;
  z-index: 70;
  background-color: #9c9c9d;
  border-radius: 8%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

export const ResalterImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: ${(props) => (!!props.vibration ? '20%' : '70%')};
  }
`;

export const ResalterControl = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-right: 8px;
  }
`;

export const CloseIconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  svg {
    font-size: 2rem;
  }
`;
