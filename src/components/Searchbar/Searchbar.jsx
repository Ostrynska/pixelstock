import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import { Container } from '../Container/Container';

import {
  Wrapper,
  SearchForm,
  SearchButton,
  SearchInput,
  Hero,
  PreTitle,
  Title,
  Search,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      return toast.warn('Please enter a valid seach name');
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <Wrapper>
      <Container>
        <Hero>
          <Title>Discover the beauty around the world</Title>
          <PreTitle>Over 4 million+ high quality stock images</PreTitle>
          <SearchForm onSubmit={handleSubmit}>
            <SearchButton type="submit">
              <Search size={24} />
            </SearchButton>
            <SearchInput
              type="text"
              name="searchName"
              value={searchName}
              onChange={handleNameChange}
              autoComplete="off"
              // autoFocus
              placeholder="Search high-resolution images"
            />
          </SearchForm>
        </Hero>
      </Container>
    </Wrapper>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
