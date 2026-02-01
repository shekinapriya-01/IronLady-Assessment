let learners = [];
let editIndex = -1;

document.getElementById("learnerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let program = document.getElementById("program").value;

    if (editIndex === -1) {
        learners.push({ name, email, program });
    } else {
        learners[editIndex] = { name, email, program };
        editIndex = -1;
    }

    this.reset();
    displayLearners();
});

function displayLearners() {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    learners.forEach((learner, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${learner.name}</td>
                <td>${learner.email}</td>
                <td>${learner.program}</td>
                <td>
                    <button class="edit" onclick="editLearner(${index})">Edit</button>
                    <button class="delete" onclick="deleteLearner(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editLearner(index) {
    let learner = learners[index];
    document.getElementById("name").value = learner.name;
    document.getElementById("email").value = learner.email;
    document.getElementById("program").value = learner.program;
    editIndex = index;
}

function deleteLearner(index) {
    learners.splice(index, 1);
    displayLearners();
}
