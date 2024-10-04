//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Check if inputs are empty
    if (!name || !age) {
        alert("Please enter valid details");
        return;
    }

    // Create a promise that resolves or rejects based on the age
    const validateAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // 4 seconds delay before resolving or rejecting the promise
    });

    // Handle the resolved and rejected states of the promise
    validateAge
        .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});
