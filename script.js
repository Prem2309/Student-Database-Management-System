document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let studentAge = document.getElementById('studentAge').value;

    const student = {
        id: studentId,
        name: studentName,
        age: studentAge
    };

    // Add student to backend
    fetch('http://localhost:8000/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([studentId, studentName, studentAge]) // Send student data as comma-separated values
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        listStudents(); // Refresh the list of students
    });

    // Reset the form
    document.getElementById('addStudentForm').reset();
});

function listStudents() {
    fetch('http://localhost:8000/list')
        .then(response => response.text())
        .then(data => {
            const studentList = document.getElementById
