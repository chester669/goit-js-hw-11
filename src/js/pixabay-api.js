const API_KEY = '44903420-1183eb8cf2f9f1f8b99b46ba0';

export async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}
