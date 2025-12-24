const toggleBtn = document.getElementById('toggleBtn')
const body = document.body

toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
        toggleBtn.innerText="Switch to Light Mode"
    }
    else{
        toggleBtn.innerText="Switch to Dark Mode"
    }
})


