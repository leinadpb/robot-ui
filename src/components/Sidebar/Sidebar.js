import React from 'react';
import { SidebarWrapper, ClicableArea, Title, TitleImage, UserNameTitle, MenuItems, MenuItem } from './Sidebar.styles';
import { BsPerson } from 'react-icons/bs';

const Sidebar = ({ showSidebar, user }) => {
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
        </MenuItems>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
