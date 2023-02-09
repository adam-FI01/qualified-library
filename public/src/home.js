function getTotalBooksCount(books) {
  if (books.length === 0) {
    return 0;
  } else {
    return books.length;
  }
}


function getTotalAccountsCount(accounts) {
  if (accounts.length === 0) {
    return 0;
  } else {
    return accounts.length;
  }
}

function getBooksBorrowedCount(books) {
  let result = books.filter((book) => !book.borrows[0].returned);  
  return result.length;
}


function getMostCommonGenres(books) {
const commonGenres = [];

for (let book of books) {
const genre = commonGenres.find(
(currentGenre) => currentGenre.name === book.genre
);
if (genre) {
genre.count++;
} else {
commonGenres.push({ name: book.genre, count: 1});
}
}
return topFive(commonGenres);

}

//Helper function to return the top five results
function topFive(array) {
let result = array.sort((countA, countB) => (
countA.count < countB.count ? 1: -1
)).slice(0, 5);

return result;
}

function getMostPopularBooks(books, count=5) {
  const popBooks = books.map((book) => ({name:book.title,count:book.borrows.length}));
  popBooks.sort((a,b) => b.count - a.count);
  return popBooks.slice(0, count);
}

function getMostPopularAuthors(books,authors) {
  return books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length}
  }).sort((authorA, authorB) => (authorA.count < authorB.count ? 1:-1)).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
