const searchForm = document.querySelector('.search-form');
const markupList = document.querySelector('.image-list');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const inputValue = searchForm.elements.search.value;

  if (!inputValue) {
    return alert('Enter');
  }
  getImage(inputValue)
    .then(data => {
      console.log(data.hits.pageUrl);
    })
    .catch(err => {});

  searchForm.reset();
  console.log(inputValue);
});

function getImage(imgName) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';

  const params = new URLSearchParams({
    key: '44449535-a1df9548b4e4ca826019364d7',
    q: imgName,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(res => res.json());
}

function renderMarkup() {
  markupList.innerHTML(
    `<li class="image-item"><img class="image" src="${hits.pageURL}" alt=""></li>`
  );
}
