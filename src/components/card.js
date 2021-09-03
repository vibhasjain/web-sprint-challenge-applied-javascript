const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let card = document.createElement('div');
  card.className = 'card';

  let headLine = document.createElement('div');
  headLine.className = 'headline';
  headLine.textContent = article.headline;
  card.appendChild(headLine);

  let author = document.createElement('div');
  author.className = 'author';
  card.appendChild(author);

  let imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  author.appendChild(imgContainer);

  let authorPhoto = document.createElement('img');
  authorPhoto.src = article.authorPhoto;
  imgContainer.appendChild(authorPhoto);

  let authorName = document.createElement('span');
  authorName.textContent = `By: ${article.authorName}`;
  author.appendChild(authorName);

  card.addEventListener('click', event => console.log(headLine.textContent));

  return card;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
  .then(response => {
    let articles = response.data.articles;

    for (const category in articles) {
      let articleArray = articles.[category];
      articleArray.forEach(article => {
        let card = Card(article);
        document.querySelector(selector).appendChild(card);
      });
    }

  })
  .catch(error => console.error(error));

}

export { Card, cardAppender }
