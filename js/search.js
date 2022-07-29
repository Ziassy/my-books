const btnSearch = document.getElementById('searchBook')
const searchhBookValue = document.getElementById('searchBookValue')
const viewCompletedTask = document.getElementById('completedTask')

const renderSearchResult = (books) => {
  renderData(books);
  viewCompletedTask.scrollIntoView()
}

btnSearch.addEventListener('click', (e) => {
  e.preventDefault()
  const getByTitle = getData().filter((a) => a.title.includes(searchhBookValue.value));

  getByTitle.length !== 0 ? renderSearchResult(getByTitle) : alert('Book is not available')

  searchBookValue.value = ''
  
});