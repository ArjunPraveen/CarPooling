var submit = document.getElementById("submit")
document.addEventListener('DOMContentLoaded', ()=> {
    var el = document.querySelector('.tabs');
    var instance = M.Tabs.init(el, {})

    var options = {
        defaultDate: new Date(Date.now()),
        setDefaultDate: true
      };
    var elems1 = document.querySelector('.datepicker');
    var instance = M.Datepicker.init(elems1, options);

    var elems2 = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems2, {});
    
    var elems3 = document.querySelectorAll('.timepicker');
    var instances = M.FormSelect.init(elems3, {});

})

const formatDate = (date) =>{
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = date.getFullYear();
    return day + "/" + month + "/" + year;
}

submit.addEventListener('click', async(e)=> {
    e.preventDefault()
    const pickupPoint = document.getElementById('pickup').value
    const destination = document.getElementById('destination').value
    var selectoptions = document.getElementById("mode");
    const modeOfTransport = selectoptions.options[selectoptions.selectedIndex].text;
    const bookingDate = new Date(document.getElementById('traveldate').value)    
    console.log(pickupPoint,destination,bookingDate , modeOfTransport)
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