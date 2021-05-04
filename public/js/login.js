const loginButton = document.getElementById('loginButton')
const signupButton = document.getElementById('signupButton')

loginButton.addEventListener('click', async (e)=>{
    e.preventDefault()
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value
    try{
    await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        credentials: "include",
        body : JSON.stringify({
            email, password
        })
    }).then((res)=>{
        check = res.json()
        return check
    }).then((check)=> {
        if(check.success){
            window.location.replace('/profile')
        }else{
            alert(check.msg)
        }
    }).catch((err)=>{
        console.log(err)
    })
}catch(err){
        console.log(err)
    }

})

signupButton.addEventListener('click', async ()=>{
    const name = document.getElementById('signupName').value
    const email = document.getElementById('signupEmail').value
    const password = document.getElementById('signupPassword').value
    console.log(name, email)
    
    const result = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            name, email, password
        })
    }).then((res) => {
        check = res.json()
        console.log(check)
        //return res.json()
    }).then((check)=>{
        if(check.success){
            window.location.replace('/profile')
        }else{
            console.log('check variable error')
        }
    })
})  