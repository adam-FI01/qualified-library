function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  const notReturned = books.filter((book) => !book.borrows[0].returned);
  console.log(notReturned);
  
  const returned = books.filter((book) => book.borrows[0].returned);
  console.log(returned);
  
  const total = [];
  
  total.push(notReturned);
  total.push(returned);
  
  return total;
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  
  const borrowers = borrows.map(({ id, returned}) => {
    const account = accounts.find(account => account.id === id);
    return {
      ...account,
      returned,
    };
  });
  return borrowers.sort((borrowerA, borrowerB) => {
    const companyA = borrowerA.company;
    const companyB = borrowerB.company;
    return companyA.localeCompare(companyB);
  })
  .slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
