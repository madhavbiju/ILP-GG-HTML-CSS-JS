async function asyncFunc() {
  try {
    // USING TRY CATCH
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const usersArray = data.users;
    console.log(usersArray);

    usersArray.slice(0, 10).forEach((user) => {
      var container = document.querySelector(".sectionMain"); // Assuming 'sectionMain' is the container you mentioned
      var divItem = document.createElement("div");
      divItem.className = "career-card";

      // Create the 'profile-details' div and set its content
      var profileDetails = document.createElement("div");
      profileDetails.className = "profile-details";
      const requirement = user.company.department;
      const designation = user.company.title;
      const qualification = user.university;
      const experience = user.age;
      profileDetails.innerHTML = `
        Designation: ${designation} | Qualification: ${qualification} | Experience: ${experience}
        Send your CV to: gghospitalhrd@gmail.com | Contact Number: 0471-2779100
      `;

      // Create the 'Apply Now' button and set its content
      var applyButton = document.createElement("button");
      var applyLink = document.createElement("a");
      applyLink.href = "#";
      applyLink.textContent = "Apply Now";
      applyButton.appendChild(applyLink);

      // Append the 'profile-details' and 'Apply Now' button to the 'career-card'
      divItem.appendChild(profileDetails);
      divItem.appendChild(applyButton);

      // Append the 'career-card' to the main container
      container.appendChild(divItem);
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

asyncFunc();
