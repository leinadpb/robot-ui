import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 80vw;
  height: 100vh;
  z-index: 100;
  background-color: #9c9c9e;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 120px auto;
  position: fixed;
`;

export const ClicableArea = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const Title = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 40px auto;
`;

export const TitleImage = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 8px;
`;

export const UserNameTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    font-weight: 600;
    font-size: 1.15rem;
  }
`;

export const MenuItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: auto;
  padding: 12px;
  margin-bottom: 8px;
  margin-left: 8px;
  span {
    color: white;
    font-size: 1.15rem;
  }
`;
