import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #23262e;
  display: grid;
  grid-template-columns: 90px auto 90px;
  grid-template-rows: 90px auto 90px;
  grid-template-areas: 'account content camera' 'content content content' 'back content home';
`;

export const AccountArea = styled.div`
  grid-area: account;
  width: 100%;
  height: 100%;
`;

export const ContentArea = styled.div`
  grid-area: content;
  width: 100%;
  height: 100%;
`;

export const CameraArea = styled.div`
  grid-area: camera;
  width: 100%;
  height: 100%;
`;

export const BackArea = styled.div`
  grid-area: back;
  width: 100%;
  height: 100%;
`;

export const HomeArea = styled.div`
  grid-area: home;
  width: 100%;
  height: 100%;
`;
