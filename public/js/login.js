const loginButton = document.getElementById('loginButton')
const signupButton = document.getElementById('signupButton')

loginButton.addEventListener('click', ()=>{
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value

})

signupButton.addEventListener('click', async ()=>{
    const name = document.getElementById('signupName').value
    const email = document.getElementById('signupEmail').value
    const password = document.getElementById('signupPassword').value
    const result = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            name, email, password
        })
    }).then((res) => res.json())
})  