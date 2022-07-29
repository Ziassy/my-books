const LOCAL_STORAGE = 'MY-BOOKS'

const title = document.getElementById('titleBook');
const author = document.getElementById('author');
const year = document.getElementById('releaseYear');
const review = document.getElementById('review');

const isCompleted = document.getElementById('bookIsComplete')
const btnSaveBook = document.getElementById('saveBook')

const clearValue = () =>{
  title.value = '';
  author.value = '';
  year.value = '';
  review.value = '';
  isCompleted.checked = false;
}

const getData = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE));
}

const renderData = (books) => {
  const inCompleted = document.getElementById('incompletedTask')
  const completed = document.getElementById('completedTask')

  inCompleted.innerHTML = ''
  completed.innerHTML = ''

  books.forEach((book) => {
    book.isCompleted === false ? inCompleted.innerHTML += inCompletedView(book) : completed.innerHTML += completedView(book)
  })
  getDashboardInformation()
}

const saveBook = (books) => {
  let book = books
  let bookData = []

  localStorage.getItem(LOCAL_STORAGE) === null ? bookData = [] : bookData = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  
  bookData.push(book)
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(bookData))

  renderData(getData())
}

const removebook = (id) => {
  let cf = confirm('Are you sure you want delete this book?')

  if(cf === true) {
    const bookDetail = getData().filter((a) => a.id == id)
    const bookData = getData().filter((a) => a.id != id)
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(bookData))

    renderData(getData())
    alert(`Book "${bookDetail[0].title}"has been deleted`);
  }

  getDashboardInformation()
}

const undoTaskFromCompleted = (id) => {
  let cf = confirm('Move book to On Going Task ?')

    if (cf === true) {
    const bookDetail = getData().filter((a) => a.id == id);
    const newBook = {
      id: bookDetail[0].id,
      title: bookDetail[0].title,
      author: bookDetail[0].author,
      year: bookDetail[0].year,
      review: bookDetail[0].review,
      isCompleted: false,
    };

    const bookData = getData().filter((a) => a.id != id);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(bookData));

    saveBook(newBook);
  }
  getDashboardInformation()

}

const moveTaskToCompleted = (id) => {
    let cf = confirm('Mark task as COMPLETED ?')

    if (cf === true) {
    const bookDetail = getData().filter((a) => a.id == id);
    const newBook = {
      id: bookDetail[0].id,
      title: bookDetail[0].title,
      author: bookDetail[0].author,
      year: bookDetail[0].year,
      review: bookDetail[0].review,
      isCompleted: true,
    };

    const bookData = getData().filter((a) => a.id != id);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(bookData));

    saveBook(newBook);
  }
  getDashboardInformation()

}

window.addEventListener('load', () => {
  if(localStorage.getItem(LOCAL_STORAGE) !== '') {
    const bookData = getData()
    renderData(bookData)
  }
})

btnSaveBook.addEventListener('click', (e) => {
  e.preventDefault()
  const newBook = {
    id: +new Date(),
    title: title.value,
    author: author.value,
    year: year.value,
    review: review.value,
    isCompleted: isCompleted.checked,
  }
  saveBook(newBook)
  clearValue()
  viewCompletedTask.scrollIntoView()
})



