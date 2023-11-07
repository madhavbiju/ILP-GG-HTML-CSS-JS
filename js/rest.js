const request = fetch(
  "https://dummyjson.com/users?limit=4&select=firstName,lastName,image,company"
);

request
  .then((response) => response.json())
  .then((data) => {
    const usersArray = data.users;

    usersArray.forEach((user, index) => {
      const firstName = user.firstName;
      const lastName = user.lastName;
      const companyDepartment = user.company.department;
      const imageUrl = user.image; // Get the image URL

      const h2 = document.createElement("h2");
      h2.textContent = firstName + " " + lastName;
      const h3 = document.createElement("h3");
      h3.textContent = companyDepartment;

      const img = document.createElement("img"); // Create an img element
      img.src = imageUrl; // Set the image source

      const specItemDiv = document.querySelector(
        ".specItem:nth-child(" + (index + 1) + ")"
      );
      specItemDiv.appendChild(img);
      specItemDiv.appendChild(h2);
      specItemDiv.appendChild(h3);
      // Append the img element to the specItemDiv
    });
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
