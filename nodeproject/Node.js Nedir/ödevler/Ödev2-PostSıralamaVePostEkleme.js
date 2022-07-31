const posts = [
  {
    id: 1,
    author: "kaan",
    dateTime: "30.07.2022",
    postTitle: "patikadev node.js dersleri",
  },
  {
    id: 2,
    author: "kaan",
    dateTime: "30.07.2022",
    postTitle: "front-end dersleri",
  },
];

const listPost = () => {
  posts.map((post) => {
    console.log(post.postTitle);
  });
};

const addPost = (newPost,callback) => {
  posts.push(newPost);
  callback();
};

console.log("Liste:\n");
listPost() 
console.log("Yeni Liste:\n");
addPost({
    id: 1,
    author: "kaan",
    dateTime: "30.07.2022",
    postTitle: "c# dersleri",
  },listPost);