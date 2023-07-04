import PropTypes from 'prop-types';

import { LoadMore, Wrapper } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <Wrapper>
      <LoadMore type="button" onClick={onLoadMore}>
        Discover more
      </LoadMore>
    </Wrapper>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
