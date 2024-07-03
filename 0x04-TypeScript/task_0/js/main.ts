interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Stacy",
    lastName: "Ndanu",
    age: 19,
    location: "South Africa",
};

const student2: Student = {
    firstName: "Tracy",
    lastName: "Barasa",
    age: 20,
    location: "Nairobi"
};

const studentsList: Student[] = [student1, student2];

// Rendering a table
const table = document.createElement("table");

studentsList.forEach((student) => {
    // Create and append a new row to the table
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);