const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

    let header = document.createElement('div');
    header.className = 'header';

    let dateSpan = document.createElement('span');
    dateSpan.className = 'date';
    dateSpan.textContent = date;
    header.appendChild(dateSpan);

    let h1Title = document.createElement('h1');
    h1Title.textContent = title;
    header.appendChild(h1Title);

    let tempSpan = document.createElement('span');
    tempSpan.textContent = temp;
    tempSpan.className = 'temp';
    header.appendChild(tempSpan);

    return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let header = Header('vibes','20','49');
  document.querySelector(selector).appendChild(header);
}

export { Header, headerAppender }
