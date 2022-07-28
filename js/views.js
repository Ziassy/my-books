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
          <button class="br-green green bold" type="submit">Complete</button>
          <button class="br-red red bold" type="submit">Delete</button>
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
          <button class="br-green green bold" type="submit">Incomplete</button>
          <button class="br-red red bold" type="submit">Delete</button>
        </div>
      </article>
`

const emptybook = `<p> Tidak ada buku </p>`