
// function saveData() {
//     console.log("add")
//     const name = document.getElementById('name').value;
//     const surname = document.getElementById('surname').value;
//     const description1 = document.getElementById('description1').value;
//     const description2 = document.getElementById('description2').value;

//     localStorage.setItem('name', name);
//     localStorage.setItem('surname', surname);
//     localStorage.setItem('description1', description1);
//     localStorage.setItem('description2', description2);
// }

// // Function to load saved data from localStorage
// function loadData() {
//     console.log("load")
//     if (localStorage.getItem('name')) {
//         document.getElementById('name').value = localStorage.getItem('name');
//     }
//     if (localStorage.getItem('surname')) {
//         document.getElementById('surname').value = localStorage.getItem('surname');
//     }
//     if (localStorage.getItem('description1')) {
//         document.getElementById('description1').value = localStorage.getItem('description1');
//     }
//     if (localStorage.getItem('description2')) {
//         document.getElementById('description2').value = localStorage.getItem('description2');
//     }
// }

// // Save the form data every time the user types in the input fields
// document.getElementById('name').addEventListener('input', saveData);
// document.getElementById('surname').addEventListener('input', saveData);
// document.getElementById('description1').addEventListener('input', saveData);
// document.getElementById('description2').addEventListener('input', saveData);

// // Load saved data when the page is loaded
// window.onload = loadData;

// ====================== OBJECT-e yigir =========================================================


// // Function to save form data to localStorage as an object
// function saveData() {
//     const formData = {
//         name: document.getElementById('name').value,
//         surname: document.getElementById('surname').value,
//         description1: document.getElementById('description1').value,
//         description2: document.getElementById('description2').value
//     };

//     localStorage.setItem('formData', JSON.stringify(formData)); // Save the object as a string
// }

// // Function to load saved data from localStorage and populate the form
// function loadData() {
//     const savedData = localStorage.getItem('formData'); // Retrieve the saved data

//     if (savedData) {
//         const formData = JSON.parse(savedData); // Convert back to object

//         document.getElementById('name').value = formData.name;
//         document.getElementById('surname').value = formData.surname;
//         document.getElementById('description1').value = formData.description1;
//         document.getElementById('description2').value = formData.description2;
//     }
// }

// // Save the form data every time the user types in the input fields
// document.getElementById('name').addEventListener('input', saveData);
// document.getElementById('surname').addEventListener('input', saveData);
// document.getElementById('description1').addEventListener('input', saveData);
// document.getElementById('description2').addEventListener('input', saveData);

// // Load saved data when the page is loaded
// window.onload = loadData;


// ====================== OBJECT-e yigir ve submit ve 1 gun sonra silir =========================================================



// // Function to save form data to localStorage as an object
// function saveData() {
//     console.log("add")
//     const formData = {
//         name: document.getElementById('name').value,
//         surname: document.getElementById('surname').value,
//         description1: document.getElementById('description1').value,
//         description2: document.getElementById('description2').value,
//         timestamp: new Date().getTime() // Save current timestamp
//     };

//     localStorage.setItem('formData', JSON.stringify(formData)); // Save the object as a string
// }

// // Function to load saved data from localStorage and populate the form
// function loadData() {
//     console.log("Load")
//     const savedData = localStorage.getItem('formData'); // Retrieve the saved data

//     if (savedData) {
//         const formData = JSON.parse(savedData); // Convert back to object
//         const currentTime = new Date().getTime();
//         const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds

//         // Check if 1 day has passed since the data was saved
//         if (currentTime - formData.timestamp >= oneDay) {
//             clearData(); // Clear localStorage if 1 day has passed
//         } else {
//             document.getElementById('name').value = formData.name;
//             document.getElementById('surname').value = formData.surname;
//             document.getElementById('description1').value = formData.description1;
//             document.getElementById('description2').value = formData.description2;
//         }
//     }
// }

// // Function to clear localStorage when the form is submitted or 1 day has passed
// function clearData() {
//     console.log("clear")
//     localStorage.removeItem('formData'); // Remove the formData object from localStorage
//     alert("Form data has been cleared from localStorage!");
// }

// // Save the form data every time the user types in the input fields
// document.getElementById('name').addEventListener('input', saveData);
// document.getElementById('surname').addEventListener('input', saveData);
// document.getElementById('description1').addEventListener('input', saveData);
// document.getElementById('description2').addEventListener('input', saveData);

// // Load saved data when the page is loaded and check if 1 day has passed
// window.onload = loadData;

// // Add an event listener to the Send button to clear localStorage on click
// document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//     clearData(); // Clear the data on click
// });





// =================================================================================

// Function to save form data to localStorage as an object
function saveData() {
    console.log("save1")
    const formData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        description1: document.getElementById('description1').value,
        description2: document.getElementById('description2').value,
        timestamp: new Date().getTime() // Save current timestamp
    };

    localStorage.setItem('formData', JSON.stringify(formData)); // Save the object as a string
}

// Function to load saved data from localStorage and populate the form
function loadData() {
    console.log("load1")
    const savedData = localStorage.getItem('formData'); // Retrieve the saved data

    if (savedData) {
        const formData = JSON.parse(savedData); // Convert back to object
        const currentTime = new Date().getTime();
        const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds

        // Check if 1 day has passed since the data was saved
        if (currentTime - formData.timestamp >= oneDay) {
            clearFormData(); // Clear localStorage only for formData if 1 day has passed
        } else {
            document.getElementById('name').value = formData.name;
            document.getElementById('surname').value = formData.surname;
            document.getElementById('description1').value = formData.description1;
            document.getElementById('description2').value = formData.description2;
        }
    }
}

// Function to clear formData from localStorage only
function clearFormData() {
    console.log("clear1")
    localStorage.removeItem('formData'); // Remove only the formData object from localStorage
    alert("Form data has been cleared from localStorage!");
}

// Save the form data every time the user types in the input fields
document.getElementById('name').addEventListener('input', saveData);
document.getElementById('surname').addEventListener('input', saveData);
document.getElementById('description1').addEventListener('input', saveData);
document.getElementById('description2').addEventListener('input', saveData);

// Load saved data when the page is loaded and check if 1 day has passed
window.onload = loadData;

// Add an event listener to the Send button to clear formData from localStorage on click
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    clearFormData(); // Clear the formData on click
});