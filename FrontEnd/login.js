document.getElementById("login").addEventListener("click",login);

async function login(){
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    let obj = {Email:email,Password:password};
    console.log(obj);

    let res = await fetch("http://localhost:3000/user/login",{
        method:"POST",
        body:JSON.stringify(obj),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    res = await res.json();
    
    if(res === "Please Signup First!"){
        alert(res);
        window.location.replace("signup.html");
    }else if(res==="Please Check Your Password!"){
        alert(res);
        document.getElementById("Email").value="";
        document.getElementById("Password").value="";
    }else{
        alert(`User Login Successfully!`);
        localStorage.setItem("token",res);
        window.location.replace("Booking.html");
    }
}