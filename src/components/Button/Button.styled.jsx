import styled from 'styled-components';

export const LoadMore = styled.button`
  background: #fff;
  color: #191b26;
  border: 1px solid #ceced2;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  border-radius: 24px;
  height: 40px;
  padding: 10px 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s ease-in;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 600;
  font-size: 14px;

  &:hover,
  &:focus {
    border: 1px solid #191b26;
    color: #191b26;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 5;
  left: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 24px 24px 0 0;
`;
