document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.push({ name, email, contact, address });

            localStorage.setItem("users", JSON.stringify(users));

            form.reset();
            alert("User registered successfully!");
        });
    }

   
    const userTable = document.getElementById("userTable");
    if (userTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        users.forEach(user => {
            let row = userTable.insertRow();
            row.insertCell(0).textContent = user.name;
            row.insertCell(1).textContent = user.email;
            row.insertCell(2).textContent = user.contact;
            row.insertCell(3).textContent = user.address;
        });
    }
});
