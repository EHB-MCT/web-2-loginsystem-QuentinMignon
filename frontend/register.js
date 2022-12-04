document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("ok")

    let user = {};
    user.username = document.getElementById('inputUsername').value;
    user.email = document.getElementById('inputEmail').value;
    user.password = document.getElementById('inputPassword').value;
    user.password2 = document.getElementById('inputPassword2').value;

    // check the passwords
    if (user.password == user.password2) {
        // Register the user
        getData("http://localhost:100/register", "POST", user).then(data => {
            alert(data.message)
        })
    } else {
        alert("Passwords do not match")
    }
})


async function getData(url, method, data) {
    let resp = await fetch(url, {
        method: method,
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(data)
    });
    return await resp.json()
}