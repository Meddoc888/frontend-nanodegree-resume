
var bio = {
  "name" : "Ritu",
  "role" : "Agent",
  "contact" : "email",
  "picture" : "images/fry.jpg",
  "message" : "Welcome to my page!",
  "skills" : ["Financial Reporting", "Finance", "System Implementation", "Auditing"]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
$("#main").append(formattedName, formattedRole);
                   /*
This is empty on purpose! Your code to build the resume will go here.
 */
