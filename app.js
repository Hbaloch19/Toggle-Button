const btn = document.getElementById("btn");
btn.onclick = ()=>{
    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
        head.style.color = "white";
        head1.style.color = "white";
        btn.textContent = "Switch To Light Mode";
    }
    else{
        document.body.style.backgroundColor = "white";
        head.style.color = "black";
        head1.style.color = "black";
        btn.textContent = "Switch To Dark Mode";
    }
}
