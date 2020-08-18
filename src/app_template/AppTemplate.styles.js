import styled from 'styled-components';

export const AppTemplateWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #3c4154, #5d6786);
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  grid-template-rows: 80px 1fr 80px;
  grid-template-areas: 'accountArea . cameraArea' 'contentArea contentArea contentArea' 'backArea . homeArea';
`;

export const AccountArea = styled.div`
  grid-area: accountArea;
  width: 100%;
  height: 100%;
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3247;
  border-radius: 0% 0% 60% 0%;
  svg {
    font-size: 2.3rem;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (orientation: landscape) {
    display: none;
  }
`;

export const ContentScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentArea = styled.div`
  grid-area: contentArea;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 8fr 7fr;
  @media screen and (orientation: landscape) {
    grid-template-rows: auto;
  }
`;

export const CameraArea = styled.div`
  grid-area: cameraArea;
  width: 100%;
  height: 100%;
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0% 60% 0% 0%;
  svg {
    font-size: 2.3rem;
  }
`;

export const BackArea = styled.div`
  grid-area: backArea;
  width: 100%;
  height: 100%;
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  background-color: #2d3247;
  border-radius: 0% 0% 0% 60%;
  svg {
    font-size: 2.3rem;
  }
`;

export const HomeArea = styled.div`
  grid-area: homeArea;
  width: 100%;
  height: 100%;
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3247;
  border-radius: 60% 0% 0% 0%;
  svg {
    font-size: 2.3rem;
  }
`;
