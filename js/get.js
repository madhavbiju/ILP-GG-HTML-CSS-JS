async function asyncFunc() {
  try {
    // USING TRY CATCH
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const usersArray = data.users;
    console.log(usersArray);

    usersArray.forEach((user, index) => {
      var container = document.querySelector(`.sectionPosts`);
      const requirement = user.company.department;
      const designation = user.company.title;
      const qualification = user.university;
      const experience = user.age;
      var divItem = document.createElement("div");
      var but = document.createElement("button");
      var req = document.createElement("req");
      var info = document.createElement("info");
      req.innerHTML = requirement;
      but.innerHTML = '<a href="#">Apply Now</a>';
      info.innerHTML = `Designation: ${designation} | Qualification: ${qualification}  | Experience: ${experience}
   Send your CV to: gghospitalhrd@gmail.com | Contact Number:0471-2779100`;
      divItem.appendChild(req);
      divItem.appendChild(but);
      divItem.appendChild(info);
      container.appendChild(divItem);
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

asyncFunc();
