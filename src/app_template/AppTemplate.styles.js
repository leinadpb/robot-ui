import styled from 'styled-components';

export const AppTemplateWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #23262e;
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-template-rows: 60px 1fr 60px;
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
`;

export const ContentArea = styled.div`
  grid-area: contentArea;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CameraArea = styled.div`
  grid-area: cameraArea;
  width: 100%;
  height: 100%;
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const HomeArea = styled.div`
  grid-area: homeArea;
  width: 100%;
  height: 100%;
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
