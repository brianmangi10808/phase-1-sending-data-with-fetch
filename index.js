

// Add your code here
function submitData(usersEmail, usersName) {
    const formData = {
        usersName: usersName,
        usersEmail: usersEmail,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
            return object;
        })
        .catch(function (error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
            return error;
        });
}


