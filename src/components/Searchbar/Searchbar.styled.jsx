import styled from 'styled-components';

import { BiSearch } from 'react-icons/bi';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #f7f7f7;
  background-color: #fff;
  height: 56px;
  padding: 0 0 0 24px;
  border-radius: 56px;
  box-shadow: 0 16px 40px rgba(25, 27, 38, 0.08);
`;

export const SearchButton = styled.button`
  display: inline-block;
  height: 25px;
  border: 0;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  [data-autocompleted] {
    background-color: transparent !important;
  }
  width: 100%;
  display: inline-block;
  font: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  padding: 8px;
  min-width: 30px;

  &::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;

export const Wrapper = styled.section`
  padding: 75px 0;
  @media screen and (min-width: 768px) {
    padding: 99px 0;
  }
`;

export const Hero = styled.div`
  width: 100%;
  ${'' /* max-width: 840px; */}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 8px;
`;

export const PreTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  margin: 0 0 24px;
  color: #fff;
`;

export const Search = styled(BiSearch)`
  color: #656f79;
`;
