import styled from 'styled-components';

import { BsHeartFill } from 'react-icons/bs';

export const ImageGalleryItems = styled.li`
  position: relative;
`;

export const ImageGalleryImage = styled.img`
  width: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  height: 30vh;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ImageTagList = styled.p`
  position: absolute;
  bottom: 7px;
  left: 5px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 5px;
  span {
    padding: 3px 5px;
    background: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4));
    border-radius: 50px;
    text-transform: capitalize;
    color: #fff;
    font-weight: 400;
    font-size: 10px;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 7px;
  left: 5px;
  padding: 3px 5px;
  background: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4));
  border-radius: 50px;
`;

export const AuthorInf = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AuthorImage = styled.img`
  width: 20px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const AuthorName = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: #fff;
`;

export const LikesCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 7px;
  right: 5px;
  padding: 3px 5px;
  background: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4));
  border-radius: 50px;
`;

export const Likes = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  margin-left: 5px;
`;

export const Icon = styled(BsHeartFill)`
  color: #fff;
`;
