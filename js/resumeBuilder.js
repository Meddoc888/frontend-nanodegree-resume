
var bio = {
  "name" : "Ritu",
  "role" : "Agent",
  "contact" : "email",
  "Picture" : "images/fry.jpg",
  "Message" : "Welcome to my page!",
  "Skills" : ["Financial Reporting", "Finance", "System Implementation", "Auditing"]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
var formattedPic = HTMLbioPic.replace(
$("#main").append(formattedName, formattedRole);
                   /*
This is empty on purpose! Your code to build the resume will go here.
 */
