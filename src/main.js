import { renderMarkup } from './js/render-functions';
import { getImage } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const markupList = document.querySelector('.gallery-list');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const inputValue = event.target.elements.search.value;

  if (!inputValue) {
    createMessage('Oops', 'You forgot to enter a search query!');
    markupList.innerHTML = '';
  } else {
    getImage(inputValue)
      .then(data => {
        if (data.hits.length === 0) {
          markupList.innerHTML = '';
          createMessage(
            'Sorry',
            'there are no images matching your search query. Please try again!'
          );
        }
        const markup = renderMarkup(data.hits);
        markupList.innerHTML = markup;
        lightbox.refresh();
      })
      .catch(err => {});

    searchForm.reset();
  }
});

function createMessage(title, message) {
  iziToast.error({
    title: title,
    message: message,
    backgroundColor: '#EF4040',
    theme: 'dark',
    position: 'topRight',
  });
}

const lightbox = new simpleLightbox('.gallery-list a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
