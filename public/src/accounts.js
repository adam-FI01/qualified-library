function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  let sortAcct = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return sortAcct;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0; 
  let ids = account.id;
  let getTotal = books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id === ids) {
        result++;
      }
    })
  })
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
    let result = books.filter((book) => book.borrows.find((thisBook) => (thisBook.id === account.id && !thisBook.returned)))
  
  result.forEach((book) => {
    let thisAuthor = authors.find((author) => book.authorId === author.id)
    book["author"] = thisAuthor
  })
  return result;
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
