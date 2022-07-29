const totalCount = document.getElementById('countTotal')
const completedCount = document.getElementById('completedCount')
const inCompletedCount = document.getElementById('incompletedCount')

const getDashboardInformation = () => {
  let completed = inCompleted = 0
  const myBooks = getData();
  const allBooks = myBooks.length;

  for(let index = 0; index < allBooks; index++) {
    myBooks[index]['isCompleted'] ? completed +=1 : inCompleted +=1
  }
  totalCount.innerHTML = allBooks;
  completedCount.innerHTML = completed;
  inCompletedCount.innerHTML = inCompleted;
}