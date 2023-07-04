import { useState } from 'react';

import { Container } from '../Container/Container';
import { ModalHeader } from '../Modal/ModalHeader/ModalHeader';

import {
  Logo,
  HeaderWrap,
  HeaderNav,
  MenuList,
  MenuItem,
  MenuButton,
  Icon,
  IconArrow,
} from './Header.styled';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <HeaderWrap id="home">
      <Container>
        <HeaderNav>
          <Logo href="/">Pixelstock</Logo>
          <MenuList>
            <MenuItem $arrow onClick={openModal}>
              <MenuButton>
                Explore
                <IconArrow />
              </MenuButton>
            </MenuItem>
            <MenuItem onClick={openModal}>
              <MenuButton>Log in</MenuButton>
            </MenuItem>
            <MenuItem $outline onClick={openModal}>
              <MenuButton>Join</MenuButton>
            </MenuItem>
            <MenuItem $upload onClick={openModal}>
              <MenuButton>
                <Icon />
                Upload
              </MenuButton>
            </MenuItem>
          </MenuList>
        </HeaderNav>
        {showModal && <ModalHeader onClose={closeModal} />}
      </Container>
    </HeaderWrap>
  );
};

export default Header;
