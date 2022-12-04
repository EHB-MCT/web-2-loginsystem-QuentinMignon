document.getElementById('loginform').addEventListener('submit', (e) => {
    e.preventDefault()

    let user = {};
    user.email = document.getElementById('inputEmail').value;
    user.password = document.getElementById('inputPassword').value;

    // Check for login

    getData("http://localhost:100/login", "POST", user).then(data => {
        console.log(data)
    })

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