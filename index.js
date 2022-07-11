let posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((el, index) => {
      output += `<li>${el.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      let error = false;
      if (!error) {
        resolve(posts);
      } else {
        reject("Error!!! Something is wrong.");
      }
    }, 2000);
  });
}

createPost({ title: "Post three", body: "This is post three." })
  //   .then(getPost)
  //   .then(deletePost)
  //   .then(getPost)
  //   .catch((err) => console.log(err));
  .then(() => {
    getPost();
    deletePost()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    getPost();
  });

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (posts.length) {
        posts.pop();
      } else {
        error = true;
      }

      if (!error) {
        resolve(posts);
      } else {
        reject("Array is empty!!!");
      }
    }, 1000);
  });
}

// deletePost()
//   .then(getPost)
//   .catch((err) => console.log(err));

// deletePost()
//   .then(getPost)
//   .catch((err) => console.log(err));

// deletePost()
//   .then(getPost)
//   .catch((err) => console.log(err));
