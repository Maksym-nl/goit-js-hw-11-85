import axios from 'axios';

const API_KEY = '36713160-b8ce690bed289b735a8a8bdcb';

export const getImg = async (query, currentPage) => {
  try {
    const { data } = await axios('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: 40,
      },
    });
    return data;
  } catch (error) {
    console.log(error.messege);
  }
};
