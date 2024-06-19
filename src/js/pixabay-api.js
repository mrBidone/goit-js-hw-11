export function getImage(imgName) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';

  const params = new URLSearchParams({
    key: '44449535-a1df9548b4e4ca826019364d7',
    q: imgName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearh: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(res => res.json());
}
