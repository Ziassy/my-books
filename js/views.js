let inCompletedView = book => `
      <article class="box bg-grey">
        <p class="title-book">${book.title}</p>
        <div class="grid-container-3">
          <p class="author">Author</p>
          <p>:</p>
          <p>${book.author}</p>
        </div>
        <div class="grid-container-3">
          <p class="author">Release Year </p>
          <p>:</p>
          <p>${book.year}</p>
        </div>
        <p class="mb-10 bold">
          My Review
        </p>
        <p class="my-review">
          ${book.review}
        </p>
        <div class="grid-container-2 mt-20">
          <button class="br-green green bold" onclick="moveTaskToCompleted(${book.id})">Complete</button>
          <button class="br-red red bold" onclick="removebook('${book.id}')">Delete</button>
        </div>
      </article>
`

let completedView = book => `
      <article class="box bg-green">
        <p class="title-book">${book.title}</p>
        <div class="grid-container-3 mt-20">
          <p class="author">Title </p>
          <p>:</p>
          <p>${book.author}</p>
        </div>
        <div class="grid-container-3 mt-20">
          <p class="author">Rilis Year </p>
          <p>:</p>
          <p>${book.year}</p>
        </div>
        <p class="mb-10 bold">
          My Review
        </p>
        <p class="my-review">
          ${book.review}
        </p>
        <div class="grid-container-2 mt-20">
          <button class="br-green green bold" type="submit" onclick="undoTaskFromCompleted(${book.id})">Incomplete</button>
          <button class="br-red red bold" type="submit" onclick="removebook('${book.id}')">Delete</button>
        </div>
      </article>
`