export async function getUserPosts(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const data = await res.json();
  return data;
}

export async function getUser(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await res.json();
  return data;
}

export async function getPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();
  return data;
}

export async function getPostComments(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const data = await res.json();
  return data;
}

export async function getAllPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data;
}

export async function login(email) {
  return fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
    .then((res) => res.json())
    .then((users) => {
      const user = users[0];
      if (!user) {
        return Promise.reject("User not found");
      }
      // if (user.username !== password) {
      //   return Promise.reject("Invalid username/password combination");
      // }
      return user;
    });
}
