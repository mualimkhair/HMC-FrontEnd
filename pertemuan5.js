const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((userData) => {
    const filter = userData.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email
    }))
    console.log(filter)
  })
  .catch((error) => {
    console.error("Error:", error);
  });