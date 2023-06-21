import React, { useState } from 'react';
import { Navbar, NavbarLogo, NavbarMenu, NavbarMenuItem, NavbarMenuItemText, NavbarToggleBtn } from './style';
import Logo from '../../../public/svg/Logo.svg';
import User from '../../../public/svg/User.svg';
import Menu from '../../../public/svg/Menu.svg';
import { SvgContainer } from './style';
import Link from 'next/link';

const Header = () => {
  const [toggle, set_toggle] = useState(true);

  return (
    <Navbar>
      <NavbarLogo>
        <SvgContainer><Logo /></SvgContainer>
      </NavbarLogo>
      <NavbarMenu toggle={toggle}>
      <NavbarMenuItem><Link href="/" legacyBehavior><NavbarMenuItemText>홈</NavbarMenuItemText></Link></NavbarMenuItem>
        <NavbarMenuItem><Link href="/reservation/request" legacyBehavior><NavbarMenuItemText>예약하기</NavbarMenuItemText></Link></NavbarMenuItem>
        <NavbarMenuItem><Link href="/reservation/check" legacyBehavior><NavbarMenuItemText>예약조회</NavbarMenuItemText></Link></NavbarMenuItem>
        <NavbarMenuItem><Link href="/login" legacyBehavior><NavbarMenuItemText>로그인</NavbarMenuItemText></Link></NavbarMenuItem>
      </NavbarMenu>
      <NavbarToggleBtn onClick={() => set_toggle(!toggle)}>
        <SvgContainer><Menu /></SvgContainer>
      </NavbarToggleBtn>
    </Navbar>
  );
}

export default Header;
