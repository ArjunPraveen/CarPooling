var editButton = document.getElementById("edit")
editButton.addEventListener('click', () =>  {
  var elems = document.getElementById('modal1');
  var instances = M.Modal.init(elems,{dismissible: false});
  instances.open()

  
});

var editButton = document.getElementById("editButton")
var logoutButton = document.getElementById("logout")

editButton.addEventListener('click', async()=> {
    var name = document.getElementById('Name').value
    var mobileNumber = document.getElementById('MobileNumber').value
    var email = document.getElementById('Email').value
    await fetch('/api/editprofile', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        credentials: "include",
        body : JSON.stringify({
            name,email,mobileNumber
        })
    }).then((res) => {
        check = res.json()
        console.log(check)
        return check
    }).then((check)=>{
        console.log(check.success)
        if(check.success){
            alert(check.msg)
            //window.location = ("localhost:5000");
        }else{
            alert(check.msg)
        }
    })
})

// var viewButtons = document.querySelectorAll('a[href="#modal2"]')

// viewButtons.forEach(view => {
//     console.log("hello")
//     view.addEventListener('click', async()=> {
//         console.log("hello")
//         var elems = document.getElementById('modal2');
//         var instances = M.Modal.init(elems,{dismissible: false});
//         instances.open()
//     })
// })

// viewButtons.forEach(view => {
//     console.log("hello")
//     view.addEventListener('click', async()=> {
        
//         var elems = document.querySelectorAll('div[name="modal2"]');
//         elems.forEach(elem => {
//             var instances = M.Modal.init(elem,{dismissible: false});
//             instances.open()
//             console.log('uo')
//         })
        
//     })
// })

// logoutButton.addEventListener('click', async()=> {
//     await fetch('/api/logout', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             "Content-Type": "application/json"
//         },
//         credentials: "include",
        
//     }).then((res) => {
//         check = res.json()
//         console.log(check)
//         return check
//     }).then((check)=>{
//         console.log(check.success)
        
//     })
// })
