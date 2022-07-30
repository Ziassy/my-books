const btnSearch = document.getElementById('searchBook')
const searchBookValue = document.getElementById('searchBookValue')
const viewCompletedTask = document.getElementById('completedTask')

const renderSearchResult = (books) => {
  renderData(books);
  viewCompletedTask.scrollIntoView()
}

const search = () => {
  const getTitleBook = getData().filter((a) => a.title.includes(searchBookValue.value));

  getTitleBook.length !== 0 ? renderSearchResult(getTitleBook) : alert(`Book "${searchBookValue.value}" is not available`)

  searchBookValue.value = ''
}

searchBookValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    search()
  }
});