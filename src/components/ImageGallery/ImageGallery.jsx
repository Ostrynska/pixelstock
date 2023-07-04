import PropTypes from 'prop-types';

import { Container } from '../Container/Container';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <section>
      <Container>
        <Gallery>
          {images.map(
            ({
              id,
              webformatURL,
              largeImageURL,
              tags,
              user,
              userImageURL,
              likes,
            }) => (
              <ImageGalleryItem
                key={id}
                url={webformatURL}
                like={likes}
                fullImage={largeImageURL}
                tag={tags}
                name={user}
                userImg={userImageURL}
                openModal={onClick}
              />
            )
          )}
        </Gallery>
      </Container>
    </section>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  onClick: PropTypes.func.isRequired,
};
