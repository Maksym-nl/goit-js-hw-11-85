// import { Notify } from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// import { getImg } from './api';

// const form = document.querySelector('#search-form');
// const gallery = document.querySelector('.gallery');
// const loadMore = document.querySelector('.load-more');

// form.addEventListener('submit', getPhotos);
// loadMore.addEventListener('click', onLoadMore);

// let currentPage = 1;
// let query = '';
// let currenHits = 0;
// const lightbox = new SimpleLightbox('.gallery a');

// function getPhotos(event) {
//   event.preventDefault();
  
//   const { searchQuery } = event.currentTarget.elements;
//   if (searchQuery.value.trim() === '') {
//     return;
//   }
//   gallery.innerHTML = '';
//   currentPage = 1;
//   query = searchQuery.value;
//   getImg(query, currentPage)
//     .then(data => {
//       if (data.hits.length !== 0) {
//         creatMarkUp(data.hits);
//         loadMore.classList.remove('is-hiden');
//         currenHits = data.totalHits;
//         currenHits -=40
//       } else {
//         Notify.failure(
//             "Sorry, there are no images matching your search query. Please try again."
//         );
//       }
//     })
//     .catch(error => console.log(error.message));
// }

// function creatMarkUp(photos) {
//   const markUp = photos
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => `<a href="${largeImageURL}" class="photo-card">
//   <img src="${webformatURL}" alt="${tags}" loading="lazy" width="300" height="250"/>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes: </b>${likes}
//     </p>
//     <p class="info-item">
//       <b>Views: </b>${views}
//     </p>
//     <p class="info-item">
//       <b>Comments: </b>${comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads: </b>${downloads}
//     </p>
//   </div>
// </a>`
//     )
//     .join('');
//   gallery.insertAdjacentHTML('beforeend', markUp);
//   lightbox.refresh();
// }

// function onLoadMore() {
//   currenHits -= 40;
//   currentPage += 1;
//   getImg(query, currentPage)
//     .then(data => {
//       creatMarkUp(data.hits);
//       if (currenHits <= 0) {
//         Notify.failure(
//           "We're sorry, but you've reached the end of search results."
//        );
//         loadMore.classList.add('is-hiden');
//       }
     
//     })
//     .catch(error => console.log(error.message));
// }

