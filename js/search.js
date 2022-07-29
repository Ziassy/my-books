const btnSearch = document.getElementById('searchBook')
const searchhBookValue = document.getElementById('searchBookValue')
const viewCompletedTask = document.getElementById('completedTask')

const renderSearchResult = (books) => {
  renderData(books);
  viewCompletedTask.scrollIntoView()
}

btnSearch.addEventListener('click', (e) => {
  e.preventDefault()
  const getTitleBook = getData().filter((a) => a.title.includes(searchhBookValue.value));

  getTitleBook.length !== 0 ? renderSearchResult(getTitleBook) : alert('Book is not available')

  searchBookValue.value = ''
  
});