fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    fullName: "test",
    phoneNumber: "02323904323",
    emailID: "test@test.com",
    subject: "test",
    coverLetter: "    ~",
  }),
})
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)));
