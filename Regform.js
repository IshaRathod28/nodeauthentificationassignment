import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
function Regform() {

    
        const[firstname,setfirstname]=useState("");
        const[lastname,setlastname]=useState("");
        const[email,setemail]=useState("");
        const[password,setpassword]=useState("");
        const[confirmpassword,setconfirmpassword]=useState("");
        const[data,setdata]=useState([]);
        
        function allLetter(inputtxt)
       
        {
          console.log(inputtxt);
         var letters = /^[A-Za-z]+$/;
         if(inputtxt.value.match(letters))
           {
            return true;
           }
         else
           {
           alert("Only characters are allowed in " + inputtxt.name);
           return false;
           }
        }

   const sendRegdatawhensubmit= async(e)=>{
    e.preventDefault();
    if(password.length < 8) { 
return (alert("Error: Password must be at least 8 characters"))
     } else if(password.search(/[a-z]/) < 0) { 
      return (alert("Error: Password must contain at least one lowercase letter"))
       
      
      } else if(password.search(/[A-Z]/) < 0) { 
        return (alert("Error: Password must contain at least one uppercase letter"))
      
      
      } else if(password.search(/[0-9]/) < 0) { 
        return (alert("Error: Password must contain at least one number"))
   
      
      } else if(password.search(/[=.*@#$%^&-+=())(?=\\S+$]/) < 0) { 
        return (alert("Error: Password must contain at least special character"))
      }
      else if(password != confirmpassword)
{
  return(
      alert("Password And Confirm Password Must Be Same")
  )
}
      else if(allLetter(document.form.firstname)&&allLetter(document.form.lastname)){
       console.log(true)
       console.log("dd")
       
       const res=await axios.post("http://localhost:8005/regdata",{
           firstname : firstname,
           lastname : lastname,
           email :email ,
           password : password ,
           confirmpassword : confirmpassword
       })
      //  console.log(res.data)
      document.getElementById("erroremail").innerHTML=res.data
      document.getElementById("erroremail").style.color="red"
         }
        // else if(firstname.search(/[0-9]/) > 0) { 
        //   return (alert("Error: Firstname cannot contain any numeric value"))
        //   }
      else{
       
      }   
   
   }



  
    

  return (
    <>
    <div align="center">
        <h1>Registration</h1>
       
            
       
    </div>
    <form onSubmit={sendRegdatawhensubmit} name="form">
      <div align="center" class="title">
        Firstname
        <br />
        <input
          type="text"
          name="firstname"
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
        name="lastname"
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
          type="email"
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
      <br />
      <p id="erroremail"></p>
      <div>
        <button type="submit" class="btn btn-primary" >Submit</button>
      </div>
      <div className='isha'>

<label>Already registered?</label>
<br />
<Link to="/login" >Please click here to login </Link>
</div>
      </form>
      </>

  );
}

export default Regform;

