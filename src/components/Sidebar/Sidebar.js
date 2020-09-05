import React from 'react';
import { SidebarWrapper, ClicableArea, Title, TitleImage, UserNameTitle, MenuItems, MenuItem } from './Sidebar.styles';
import { BsPerson } from 'react-icons/bs';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Sidebar = ({ showSidebar, user }) => {
  const history = useHistory();

  const navigateTo = (path) => {
    showSidebar(false);
    history.push(path);
  };

  return (
    <>
      <ClicableArea onClick={() => showSidebar(false)} />
      <SidebarWrapper>
        <Title>
          <TitleImage>
            <BsPerson />
          </TitleImage>
          <UserNameTitle>
            <span>{user.fullName}</span>
          </UserNameTitle>
        </Title>
        <MenuItems>
          <MenuItem onClick={() => navigateTo('/app/patients')}>
            <span>Pacientes</span>
          </MenuItem>
          <MenuItem>
            <span>Grabaciones</span>
          </MenuItem>
          <MenuItem>
            <span>Acerca de Robi</span>
          </MenuItem>
          <MenuItem>
            <span>Ayuda</span>
          </MenuItem>
          <MenuItem>
            <span>Configuración</span>
          </MenuItem>
          <MenuItem>
            <span style={{ color: 'darkred' }}>Limpiar estados del robot</span>
          </MenuItem>
        </MenuItems>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
