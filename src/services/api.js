import axios from 'axios';

const API_KEY = '29966303-d9893c98832d118b1f4c04955';
const BASE_URL = 'https://pixabay.com/api/';
const popular = `https://pixabay.com/api/?key=${API_KEY}&category=popular`;

export const getImages = async (q, page) => {
  const options = new URLSearchParams({
    key: `${API_KEY}`,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  });
  const URL = `${BASE_URL}?${options}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function getPopularImages(page) {
  try {
    const response = await axios.get(popular, {
      params: {
        per_page: 12,
        page,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export function getImageData(data) {
  return data.map(
    ({ id, tags, largeImageURL, webformatURL, user, userImageURL, likes }) => ({
      id,
      tags,
      largeImageURL,
      webformatURL,
      user,
      userImageURL,
      likes,
    })
  );
}
