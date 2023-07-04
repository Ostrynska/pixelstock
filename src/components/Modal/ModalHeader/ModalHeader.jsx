import { useEffect } from 'react';

import Typewriter from 'typewriter-effect';

import { RxCross1 } from 'react-icons/rx';

import {
  ModalOverlay,
  ModalBody,
  ModalContainer,
  ModalCloseButton,
  Image,
  Title,
  TextWrapp,
  ModalFooter,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ModalSocial,
} from './ModalHeader.styled';

export const ModalHeader = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalBody>
          <ModalContainer>
            <ModalCloseButton
              onClick={() => {
                onClose();
              }}
            >
              <RxCross1 />
            </ModalCloseButton>

            <Title>
              <Typewriter
                options={{
                  strings: ['This page is under construction'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </Title>
            <Image />
            <TextWrapp>
              <p>We're working on it.</p>
              <p>Please check back soon</p>
            </TextWrapp>

            <ModalFooter>
              <div>Let's stay in touch.</div>
              <ModalSocial>
                <p>Follow us:</p>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/">
                      <Instagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/">
                      <Youtube />
                    </a>
                  </li>
                </ul>
              </ModalSocial>
            </ModalFooter>
          </ModalContainer>
        </ModalBody>
      </ModalOverlay>
    </>
  );
};
