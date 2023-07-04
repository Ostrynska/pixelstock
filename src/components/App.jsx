import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import ScrollToTop from 'react-scroll-to-top';

import { getImages, getImageData, getPopularImages } from '../services/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loading } from './Loader/Loader';
import { Modal } from './Modal/Modal';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { AiOutlineArrowUp } from 'react-icons/ai';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fullImage, setFullImage] = useState('');
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(0);

  const fetchPopularImages = async () => {
    setLoading(true);

    try {
      const popularImages = await getPopularImages(page);
      setImages(popularImages);
      // setImages(images => [...images, ...popularImages]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchName) {
      fetchPopularImages();
    } else {
      renderGallery();
    }
  }, [page, searchName]);

  const renderGallery = async () => {
    setLoading(true);

    try {
      const { hits, totalHits, total } = await getImages(searchName, page);

      if (!hits.length) {
        toast.error(
          `Nooo... we cannot find "${searchName}" 😢
          Please try again`
        );
      } else if (page === 1) {
        toast.success(`You can find: ${total} images 🚀`);
      }

      const newDataImage = getImageData(hits);

      setImages(images => [...images, ...newDataImage]);
      setTotalHits(totalHits);
    } catch (error) {
      setError(error);
      toast.error(`Oops... Something went wrong`);
    } finally {
      setLoading(false);
    }
  };

  const onFormSubmit = searchName => {
    setSearchName(searchName);
    setImages([]);
    setPage(1);
  };

  const openModal = fullImage => {
    toggleModal();
    setFullImage(fullImage);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const hideLoadMoreBtn =
    images.length > 0 && !loading && images.length !== totalHits;

  const loadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <>
      <Header />
      <main>
        <Searchbar onSubmit={onFormSubmit} />
        <ImageGallery images={images} onClick={openModal} />
        {showModal && (
          <Modal onModalClick={toggleModal} fullImage={fullImage} />
        )}
        {loading && <Loading />}
        {hideLoadMoreBtn && <Button onLoadMore={loadMore} />}
      </main>
      <Footer />
      <Toaster position="top-right" />
      <ScrollToTop
        smooth
        component={<AiOutlineArrowUp size={28} style={{ color: '#1c4931' }} />}
      />
    </>
  );
};
