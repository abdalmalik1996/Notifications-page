let MarkAll = document.querySelector(".Mark-all");
let NotReadable = document.querySelectorAll(".Not-readable");
let markRead = document.querySelectorAll(".mark-read");

let conter = document.querySelector(".conter");





conter.textContent =markRead.length;
function mark(){
    NotReadable.forEach(e=>{
e.classList.remove("Not-readable");
    })
    markRead.forEach(e=>{
        e.classList.remove("mark-read");
    })
        conter.textContent =0;
    
}