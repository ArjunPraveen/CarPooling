var submit = document.getElementById("submit")

submit.addEventListener('click', async(e)=> {
    e.preventDefault()
    const pickupPoint = document.getElementById('pickup').value
    const destination = document.getElementById('destination').value
    const bookingDate = document.getElementById('bookingDate').value
    const modeOfTransport = document.getElementById('mode').value
    console.log(pickupPoint,destination, bookingDate, modeOfTransport)
    await fetch('/api/newRide', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        credentials: "include",
        body : JSON.stringify({
            pickupPoint, destination, bookingDate, modeOfTransport
        })
    }).then((res) => {
        check = res.json()
        console.log(check)
        return check
    }).then((check)=>{
        console.log(check.success)
        if(check.success){
            alert(check.msg)
        }else{
            alert(check.msg)
        }
    })
})