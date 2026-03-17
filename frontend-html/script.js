const API = "http://localhost:8081/api/users";

function loadUsers() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("users");
            list.innerHTML = "";
            data.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                list.appendChild(li);
            });
        });
}

function addUser() {
    const name = document.getElementById("name").value;

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    })
    .then(res => res.json())
    .then(() => {
        loadUsers();
    })
    .catch(err => console.error(err));
}

loadUsers();
