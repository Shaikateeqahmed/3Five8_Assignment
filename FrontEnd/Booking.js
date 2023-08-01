document.getElementById("book").addEventListener("click",book);

async function getUserName(){
    let intr = document.getElementById("intro");
    let res = await fetch("http://localhost:3000/book/getname",{
         method : "GET",
         headers : {
            "Content-Type" : "application/json",
            Authorization : localStorage.getItem("token")
         }
    })
    res = await res.json();
    console.log(res);
    intr.innerHTML = `Hi ${res[0].Name}, You had Signup With this Email ID:- ${res[0].Email}` 
}
getUserName();
async function getBooking(){
    let res = await fetch("http://localhost:3000/book",{
         method : "GET",
         headers : {
            "Content-Type" : "application/json",
            Authorization : localStorage.getItem("token")
         }
    })
    res = await res.json();
    console.log(res); 
    append(res);
}
getBooking();

function append(data){
    let cont = document.getElementById("container");
    cont.innerHTML = null;
    data.map((el)=>{
        let div = document.createElement("div");
        let type = document.createElement("h1");
        type.innerText =`Facility ${el.Type}`;
        let date = document.createElement("p");
        date.innerText = `Booking Date ${el.Date}`;
        let st = document.createElement("p");
        st.innerText = `Start Time ${el.StartTime}`;
        let et = document.createElement("p");
        et.innerText = `End Time ${el.EndTime}`;
        let amt = document.createElement("h3");
        amt.innerText = `Total Amount ${el.Amount}`;
        let btn = document.createElement("button");
        btn.innerText = `Delete A Booking`;
        btn.addEventListener("click",()=>{
            deletebtn(el.id);
        })
        div.append(type,date,st,et,amt,btn);
       cont.append(div);
    })
}

async function book(e){
    e.preventDefault()
    let type = document.getElementById("Type").value;
    let date = document.getElementById("Date").value;
    let starttime = +document.getElementById("StartTime").value;
    let endtime = +document.getElementById("EndTime").value;
    let obj = {};
    if(endtime>starttime ){
        obj = {Type:type,Date:date,StartTime:starttime,EndTime:endtime};
    }else if(endtime<starttime && (starttime==10||starttime==11||starttime==12)){
        obj = {Type:type,Date:date,StartTime:starttime,EndTime:endtime};
    }else{
        alert(`Please Select a Appropride time!`);
    } 
    console.log(obj);

    let res = await fetch("http://localhost:3000/book",{
        method : "POST",
        body : JSON.stringify(obj),
        headers : {
            "Content-Type" : "application/json",
            Authorization : localStorage.getItem("token")
        }
    })
    res = await res.json();
    alert(res);
    getBooking();
}

async function deletebtn(id){
    let res = await fetch(`http://localhost:3000/book/${id}`,{
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json",
            Authorization : localStorage.getItem("token")
        }
    })
    res = await res.json();
    alert(res);
    getBooking();
}