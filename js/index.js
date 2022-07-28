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
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [];
}

const renderData = (books = []) => {
  const inCompleted = document.getElementById('incompletedTask')
  const completed = document.getElementById('completedTask')

  // const notFoundIncompleted = books.filter((a) => a.isCompleted === false)
  // const notFoundCompleted = books.filter((a) => a.isCompleted === true)
  // if (notFoundIncompleted.length === 0 && notFoundCompleted.length === 0) {
  //   inCompleted.innerHTML += emptybook
  //   completed.innerHTML += emptybook  
  // } else {
  //   books.forEach((book) => {
  //   if (book.isCompleted === false) {
  //     inCompleted.innerHTML += inCompletedView(book)
  //   } else {
  //     completed.innerHTML += completedView(book)
  //   }
  //   })
  // }
  inCompleted.innerHTML = ''
  completed.innerHTML = ''

    books.forEach((book) => {
      if(book.isCompleted === false) {
        inCompleted.innerHTML += inCompletedView(book)
      } else {
        completed.innerHTML += completedView(book)
      }
    })
    dashboardInformation()
}

const saveBook = (books) => {
  let book = books
  let bookData = []

  localStorage.getItem(LOCAL_STORAGE) === null ? bookData = [] : bookData = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  
  bookData.push(book)
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(bookData))

  renderData(getData())
}

window.addEventListener('load', () => {
  if(localStorage.getItem(LOCAL_STORAGE) !== '') {
    console.log('hai')
    const bookData = getData()
    renderData(bookData)
  }
})

btnSaveBook.addEventListener('click', (event) => {
  event.preventDefault()
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
})

