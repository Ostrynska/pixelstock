import styled from 'styled-components';

import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

import errorImage from '../../../images/error.png';

export const Facebook = styled(FaFacebook)``;
export const Youtube = styled(FaYoutube)``;
export const Twitter = styled(FaTwitter)``;
export const Instagram = styled(FaInstagram)``;

export const Image = styled.div`
  background-position: 50% 0;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100px;
  height: 110px;
  background-image: url(${errorImage});
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 200;
`;

export const ModalBody = styled.div`
  position: relative;
  background-color: #fafafa;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px 12px;
  max-width: 468px;

  width: 575px;
  height: 295px;
`;

export const ModalCloseButton = styled.button`
  border: none;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  background-color: transparent;
  @media (min-width: 478px) {
    width: 14px;
    height: 14px;
    top: 24px;
    right: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TextWrapp = styled.div`
  margin: 10px 0;
  p {
    font-size: 14px;
    text-align: center;
  }
`;

export const ModalFooter = styled.div`
  @media (min-width: 478px) {
    bottom: 14px;
    gap: 155px;
  }
  @media screen and (min-width: 768px) {
    bottom: 16px;
    gap: 165px;
  }
  @media screen and (min-width: 1200px) {
    bottom: 12px;
    gap: 195px;
  }
  position: absolute;

  display: flex;

  div {
    font-size: 12px;
    display: flex;
  }
`;

export const ModalSocial = styled.div`
  p {
    margin-right: 5px;
  }
  ul {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    li {
      height: 16px;
      width: 14px;
      transition: color 0.15s ease-in-out;

      &:hover {
        color: #00ab6b;
      }
    }
  }
`;
