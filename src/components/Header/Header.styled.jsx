import { FiUpload } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

import styled, { css } from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: stretch;
  padding: 20px 0;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-family: 'Ysabeau SC', sans-serif;
  font-weight: 600;
  font-size: 30px;
  color: #fff;
`;

export const MenuList = styled.ul`
  display: none;
  @media screen and (min-width: 500px) {
    display: flex;
    list-style: none;
    gap: 5px;
    margin-left: auto;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    list-style: none;
    gap: 10px;
    margin-left: auto;
  }
`;

export const MenuItem = styled.li`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 24px;
  height: 40px;

  transition: all 0.1s ease-in;
  @media screen and (min-width: 500px) {
    padding: 0 10px;
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 16px;
    font-size: 14px;
  }
  &:hover {
    background: hsla(0, 0%, 100%, 0.1);
    color: #f7f7f7;
  }
  ${props =>
    props.$upload &&
    css`
      background: #00ab6b;
      color: #fff;
      border: none;
      border-radius: 24px;
      height: 40px;
      padding: 0 16px;
      &:hover {
        background: #14bc7d;
        color: #fff;
      }
    `}
  ${props =>
    props.$outline &&
    css`
      border-radius: 24px;
      height: 40px;
      padding: 0 16px;
      background: hsla(0, 0%, 100%, 0.1);
      color: #fff;
      border: 1px solid hsla(0, 0%, 100%, 0.1);
      &:hover {
        border: 1px solid #fff;
        color: #fff;
      }
    `}
      ${props =>
    props.$arrow &&
    css`
      width: 76px;
    `}
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
`;

export const Icon = styled(FiUpload)`
  color: #fff;
  margin-right: 8px;
  width: 15px;
  height: 20px;
`;

export const IconArrow = styled(IoIosArrowDown)`
  color: #fff;
  margin-left: 2px;
  width: 12px;
  height: 20px;
`;
