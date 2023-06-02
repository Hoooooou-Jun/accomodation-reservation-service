import React, { useState } from 'react';
import { Navbar, NavbarLogo, NavbarMenu, NavbarMenuItem, NavbarMenuItemText, NavbarToggleBtn } from './style';
import Logo from '../../../public/svg/Logo.svg';
import User from '../../../public/svg/User.svg';
import Menu from '../../../public/svg/Menu.svg';
import { SvgContainer } from './style';

const Header = () => {
  const [toggle, set_toggle] = useState(true);

  return (
    <Navbar>
      <NavbarLogo>
        <SvgContainer><Logo /></SvgContainer>
      </NavbarLogo>
      <NavbarMenu toggle={toggle}>
        <NavbarMenuItem><NavbarMenuItemText>펜션소개</NavbarMenuItemText></NavbarMenuItem>
        <NavbarMenuItem><NavbarMenuItemText>예약하기</NavbarMenuItemText></NavbarMenuItem>
        <NavbarMenuItem><NavbarMenuItemText>예약조회</NavbarMenuItemText></NavbarMenuItem>
        <NavbarMenuItem><NavbarMenuItemText>문의</NavbarMenuItemText></NavbarMenuItem>
      </NavbarMenu>
      <NavbarToggleBtn onClick={() => set_toggle(!toggle)}>
        <SvgContainer><Menu /></SvgContainer>
      </NavbarToggleBtn>
    </Navbar>
  );
}

export default Header;
