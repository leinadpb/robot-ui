import styled from 'styled-components';
import { Button } from '@chakra-ui/core';

export const PatientsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PatientBoxWithAction = styled.div`
  width: 100%;
  height: auto;
  max-height: 40px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 60px;
`;

export const PatientAction = styled.div`
  margin: 4px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
`;

export const PatientBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  background: #222537;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PatientList = styled.div`
  width: 100%;
  height: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;

  ${PatientBoxWithAction} {
    margin-bottom: 18px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const Action = styled(Button)``;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;

export const CreateBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`;

export const LimitMsg = styled.div`
  padding: 8px;
  color: #fff;
  font-size: 0.9rem;
  text-align: center;
`;
