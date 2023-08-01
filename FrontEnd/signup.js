document.getElementById("signup").addEventListener("click",signup);

async function signup(e){
    e.preventDefault();
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    let phone = document.getElementById("Phone_NO").value;
    let obj = {Name:name,Email:email,Password:password,Phone_NO:phone};
    console.log(obj);

    let res = await fetch("http://localhost:3000/user/signup",{
        method:"POST",
        body:JSON.stringify(obj),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    res = await res.json();
    alert(res);
    
    document.getElementById("Name").value="";
    document.getElementById("Email").value="";
    document.getElementById("Password").value="";
    document.getElementById("Phone_NO").value="";
    window.location.replace("login.html");
}