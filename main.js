let MarkAll = document.querySelector(".Mark-all");
let NotReadable = document.querySelectorAll(".Not-readable");
let markRead = document.querySelectorAll(".mark-read");
console.log(markRead);

function mark(){

    NotReadable.forEach(e=>{
e.classList.remove("Not-readable");
    })
    
    markRead.forEach(e=>{
        e.classList.remove("mark-read")
    })
}