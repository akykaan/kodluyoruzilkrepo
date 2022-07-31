// const func1 = () => {
//   console.log("func 1");
// };

// const func2 = () => {
//   console.log("func 2");
// };

// func1();
// func2();

// JS single thread olarak çalışır
// işlemleri sıralı olarak çalışır

//--------------------
// let x=5;
// console.log(x);

// setTimeout(() => {
//     x=x+5;
//     console.log("5sn sonra gelen kısım:",x);
// }, 5000);

// x=x+5;
// console.log(x);

const books = [
  {
    name: "book 1",
    author: "yazar 1",
  },
  {
    name: "book 2",
    author: "yazar 2",
  },
  {
    name: "book 3",
    author: "yazar 3",
  },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook,callback) => {
  books.push(newBook);
  callback();
};

addBook({
  name: "book 4",
  author: "yazar 4",
},listBooks);
