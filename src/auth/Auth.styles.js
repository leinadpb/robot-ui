import styled from 'styled-components';
import { Button } from '@chakra-ui/core';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #23262e;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 7fr 4fr 2fr;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: white;
  }
`;

export const Actions = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 12px;
  padding: 12px;
`;

export const Action = styled(Button)`
  width: 100%;
  background-color: #1c1e26 !important;
  color: white;
  padding: 16px;
`;

export const ActionText = styled.div`
  width: 100%;
  text-align: center;
  span {
    color: white;
  }
`;
