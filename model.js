const mongoose = require("mongoose");

// const getStudentData = (
//   fullname,
//   twitter,
//   linkedin,
//   phoneNo,
//   DOB,
//   description
// ) => {
//   const fullnameFilter = new RegExp("([A-Za-z])+");
//   const twitterfilter = new RegExp("((www.twitter.com)[/]([a-zA-Z0-9]+))"); // twitter.com/x''yz''
//   const linkedinfilter = new RegExp("((www.linkedin.com)[/]([a-zA-Z0-9]+))");
//   const phoneNoFilter = new RegExp("([0-9]{11})");
//   const DOBfilter = new RegExp("([0-9]{2}[/][0-9]{2}[/][0-9]{4})");
//   const descriptionfilter = new RegExp("[a-z A-Z 0-9,.&-]{20,200}");
//   if (
//     fullnameFilter.test(fullname) &&
//     twitterfilter.test(twitter) &&
//     linkedinfilter.test(linkedin) &&
//     phoneNoFilter.test(phoneNo) &&
//     DOBfilter.test(DOB) &&
//     descriptionfilter.test(description)
//   ) {
//     const data = {};
//     data.fullname = fullname;
//     data.twitterUrl = twitter;
//     data.linkedinUrl = linkedin;
//     data.phoneNo = phoneNo;
//     data.dateOfBirth = DOB;
//     data.desc = description;

//     // console.log(data);
//     return data;
//   } else {
//     // console.log("Model.js Invalid Data");
//     return "Model.js invalid Data";
//   }
// };

let userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  LinkedIn: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
// const newStudent = getStudentData(
//   userSchema.fullname,
//   userSchema.twitter,
//   userSchema.linkedin,
//   userSchema.phoneNo,
//   userSchema.DOB,
//   userSchema.description
// );

module.exports = mongoose.model("student", userSchema);

// const getStudentData = (
//   fullname,
//   twitter,
//   linkedin,
//   phoneNo,
//   DOB,
//   description
// ) => {
//   const fullnameFilter = new RegExp("([A-Za-z])+");
//   const twitterfilter = new RegExp("((www.twitter.com)[/]([a-zA-Z0-9]+))"); // twitter.com/x''yz''
//   const linkedinfilter = new RegExp("((www.linkedin.com)[/]([a-zA-Z0-9]+))");
//   const phoneNoFilter = new RegExp("([0-9]{11})");
//   const DOBfilter = new RegExp("([0-9]{2}[/][0-9]{2}[/][0-9]{4})");
//   const descriptionfilter = new RegExp("[a-z A-Z 0-9,.&-]{20,200}");
//   if (
//     fullnameFilter.test(fullname) &&
//     twitterfilter.test(twitter) &&
//     linkedinfilter.test(linkedin) &&
//     phoneNoFilter.test(phoneNo) &&
//     DOBfilter.test(DOB) &&
//     descriptionfilter.test(description)
//   ) {
//     const data = {};
//     data.fullname = fullname;
//     data.twitterUrl = twitter;
//     data.linkedinUrl = linkedin;
//     data.phoneNo = phoneNo;
//     data.dateOfBirth = DOB;
//     data.desc = description;

//     console.log(data);
//   } else {
//     console.log("Invalid Data");
//   }
// };

// getStudentData(
//   "Moses Audu",
//   "www.twitter.com/moses",
//   "www.linkedin.com/moses",
//   "09012345678",
//   "03/08/2022",
//   "moses audu is a backend developer at seamfix, and also love writing codes"
// );
