import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ fullImage, alt, onModalClick }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClick();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onModalClick]);

  const onBackdrop = e => {
    if (e.target === e.currentTarget) {
      onModalClick();
    }
  };
  return (
    <Overlay onClick={onBackdrop}>
      <ModalWindow>
        <img src={fullImage} alt={alt} />
      </ModalWindow>
    </Overlay>
  );
};

Modal.prototypes = {
  fullImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};
