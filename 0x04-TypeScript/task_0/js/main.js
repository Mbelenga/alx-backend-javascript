var student1 = {
    firstName: "Stacy",
    lastName: "Ndanu",
    age: 19,
    location: "South Africa",
};
var student2 = {
    firstName: "Tracy",
    lastName: "Barasa",
    age: 20,
    location: "Nairobi"
};
var studentsList = [student1, student2];
// Rendering a table
var table = document.createElement("table");
studentsList.forEach(function (student) {
    // Create and append a new row to the table
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.body.appendChild(table);
