import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  ImageGalleryItems,
  ImageGalleryImage,
  ImageTagList,
  AuthorInf,
  Author,
  AuthorImage,
  AuthorName,
  LikesCounter,
  Likes,
  Icon,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  url,
  tag,
  openModal,
  fullImage,
  name,
  userImg,
  like,
}) => {
  const [showAuthor, setShowAuthor] = useState(false);
  const tagsList = tag.split(',').map(t => t.trim());

  const handleMouseEnter = () => {
    setShowAuthor(true);
  };

  const handleMouseLeave = () => {
    setShowAuthor(false);
  };

  return (
    <>
      <ImageGalleryItems>
        <ImageGalleryImage
          src={url}
          alt={tag}
          onClick={() => openModal(fullImage)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        {showAuthor && (
          <>
            <ImageTagList>
              {tagsList.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </ImageTagList>
            <AuthorInf>
              <Author>
                <AuthorImage src={userImg} alt={name} />
                <AuthorName>{name}</AuthorName>
              </Author>
              <LikesCounter>
                <Icon size={12} />
                <Likes>{like}</Likes>
              </LikesCounter>
            </AuthorInf>
          </>
        )}
      </ImageGalleryItems>
    </>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  fullImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
