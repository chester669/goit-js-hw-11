import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showLoading,
  hideLoading,
  showNoResultsMessage,
  showError,
} from './js/render-function.js';

document
  .getElementById('search-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value.trim();
    if (!searchInput) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
      });
      return;
    }

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    showLoading();

    try {
      const data = await fetchImages(searchInput);
      hideLoading();

      if (data.hits.length === 0) {
        showNoResultsMessage();
      } else {
        renderImages(data.hits);
      }
    } catch (error) {
      hideLoading();
      showError('Something went wrong. Please try again later.');
      console.error('Error fetching images:', error);
    }
  });
