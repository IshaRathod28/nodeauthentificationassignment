import React,{useState,useEffect} from 'react'
import axios from "axios";
function Regform() {

    
        const[firstname,setfirstname]=useState("");
        const[lastname,setlastname]=useState("");
        const[email,setemail]=useState("");
        const[password,setpassword]=useState("");
        const[confirmpassword,setconfirmpassword]=useState("");
        const[data,setdata]=useState([]);


   const sendRegdatawhensubmit= async(e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:8005/regdata",{
        firstname : firstname,
        lastname : lastname,
        email :email ,
        password : password ,
        confirmpassword : confirmpassword
    })
   }



    // function allowfirstnameastext(){
    //     var firstnameinput=document.getElementById("firstname").value;
    //     if(isNaN(firstnameinput)){
    //         document.getElementById("firstnamevalidation").style.color="green";
    //         document.getElementById("firstnamevalidation").style.fontSize="small";
    //         document.getElementById("firstnamevalidation").innerHTML="Correct input";
    //     }else{
    //         document.getElementById("firstnamevalidation").style.color="red";
    //         document.getElementById("firstnamevalidation").style.fontSize="small";
    //         document.getElementById("firstnamevalidation").innerHTML="Inorrect input";
    //     }
    // }
    // function allowlastnameastext(){
    //     var lastnameinput=document.getElementById("lastname").value;
    //     if(isNaN(lastnameinput)){
    //         document.getElementById("lastnamevalidation").style.color="green";
    //         document.getElementById("lastnamevalidation").style.fontSize="small";
    //         document.getElementById("lastnamevalidation").innerHTML="Correct input";
    //     }else{
    //         document.getElementById("lastnamevalidation").style.color="red";
    //         document.getElementById("lastnamevalidation").style.fontSize="small";
    //         document.getElementById("lastnamevalidation").innerHTML="Inorrect input";
    //     }
    // }

    // function allownumberinputfirstnum(){
    //     var firstnuminput = document.getElementById("firstname").value;
    //     if(/^ [0-9]*$/.test(firstnuminput)){
    //         document.getElementById("firstnamevalidation").style.color="green";
    //         document.getElementById("firstnamevalidation").innerHTML="Correct input"
    //     }
    //     else{
    //         document.getElementById("firstnamevalidation").style.color="red";
    //         document.getElementById("firstnamevalidation").innerHTML="Error:Only numeric values are allowed  ";
    //     }
    
    //     }
    

  return (
    <>
    <div align="center">
        <h1>Registration</h1>
       
            
       
    </div>
    <form onSubmit={sendRegdatawhensubmit}>
      <div align="center" class="title">
        Firstname
        <br />
        <input
          type="text"
          placeholder="Please enter your first name"
          class="form-control"
          id ="firstname" onChange={(e)=>{setfirstname(e.target.value)}} required
        />
        <p id="firstnamevalidation"></p>
      </div>
      <div align="center" class="title">
        Lastname
        <br />
        <input
          type="text"
          placeholder="Please enter your last name"
          class="form-control"
          id="lastname"
          onChange={(e)=>{setlastname(e.target.value)}}
          required
        />
        <p id="lastnamevalidation"></p>
      </div>
      <div align="center" class="title">
        Email
        <br />
        <input
          type="text"
          placeholder="Please enter your email"
          class="form-control"
          required
          onChange={(e)=>{setemail(e.target.value)}}
        />
      </div>
      <div align="center" class="title">
        Password
        <br />
        <input
          type="text"
          placeholder="Please enter your password"
          class="form-control"
          required
          onChange={(e)=>{setpassword(e.target.value)}}
        />
      </div>
      <div align="center" class="title">
       Confirm Password
        <br />
        <input
          type="text"
          placeholder="Please enter your password again"
          class="form-control"
          required
          onChange={(e)=>{setconfirmpassword(e.target.value)}}
        />
      </div>
      <div>
        <button type="submit" class="btn btn-primary" >Submit</button>
      </div>
      </form>
      </>

  );
}

export default Regform;
