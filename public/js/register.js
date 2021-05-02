const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

window.addEventListener('resize', ()=>{
    if (window.innerWidth < 500){
        document.getElementById("container").style.display = "none";
        document.getElementById("desktop-view-only").style.display = "block";
    }else{
        document.getElementById("container").style.display = "block";
        document.getElementById("desktop-view-only").style.display = "none";
    }
});
