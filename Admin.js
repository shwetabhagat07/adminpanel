
const batches = [
    { id: 1, name: "Batch 1", level: "Intermediate", image: "image1.jpg", description: "Description for Batch 1" },
    { id: 2, name: "Batch 2", level: "Advanced", image: "image2.jpg", description: "Description for Batch 2" },
];


function displayBatches() {
    const tableBody = document.getElementById("batchTableBody");
    tableBody.innerHTML = "";

    batches.forEach(batch => {
        const row = `<tr>
                        <td>${batch.id}</td>
                        <td>${batch.name}</td>
                        <td>${batch.level}</td>
                        <td><img src="${batch.image}" alt="Batch Image" style="max-width: 100px; max-height: 100px;"></td>
                        <td>${batch.description}</td>
                        <td><button class="btn btn-primary" onclick="editBatch(${batch.id})">Edit</button></td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}


function openBatchModal() {
    const modal = document.getElementById("batchModal");
    modal.style.display = "block";
}


function closeBatchModal() {
    const modal = document.getElementById("batchModal");
    modal.style.display = "none";
}


function addBatch() {
    const form = document.getElementById("batchForm");
    const batchName = form.elements["batchName"].value;
    const level = form.elements["level"].value;
    const image = form.elements["image"].value;
    const description = form.elements["description"].value;

    const newBatch = {
        id: batches.length + 1,
        name: batchName,
        level: level,
        image: image,
        description: description,
    };

    batches.push(newBatch);
    displayBatches();
    closeBatchModal();
}
const assignedDates = new Set();

        function assignLecture() {
            const instructor = document.getElementById('instructor').value;
            const lectureDate = document.getElementById('lectureDate').value;

            if (!instructor || !lectureDate) {
                document.getElementById('errorMessage').textContent = 'Please enter both instructor and lecture date.';
                return;
            }

            if (assignedDates.has(lectureDate)) {
                document.getElementById('errorMessage').textContent = 'This instructor is already assigned to a lecture on this date.';
                return;
            }
            assignedDates.add(lectureDate);

            
            document.getElementById('errorMessage').textContent = '';
        }
