import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios"
import Dashboard from './Dashboard';
function Login(){
    const[loginemail,setloginemail]=useState("");
    const[loginpassword,setloginpassword]=useState("");
    const[data,setdata]=useState([]);
    const[showerror,setshowerror]=useState("");
    const[showsuccessmsg,setshowsuccessmsg]=useState("");
    const[showdashboard,setshowdashboard]=useState(false);
    const[showlogin,setshowlogin]=useState(true);
    const clickloginaction=async(e)=>{
      e.preventDefault();
       
      if(loginpassword.length < 8) { 
        return (alert("Error: Password must be at least 8 characters"))
             } else if(loginpassword.search(/[a-z]/) < 0) { 
              return (alert("Error: Password must contain at least one lowercase letter"))
               
  
              } else if(loginpassword.search(/[A-Z]/) < 0) { 
                return (alert("Error: Password must contain at least one uppercase letter"))
              
              
              } else if(loginpassword.search(/[0-9]/) < 0) { 
                return (alert("Error: Password must contain at least one number"))
           
              
              } else if(loginpassword.search(/[=.*@#$%^&-+=())(?=\\S+$]/) < 0) { 
                return (alert("Error: Password must contain at least special character"))
              }else{
      
        const res= await axios.post("http://localhost:8005/logindata",{
           loginemail : loginemail,
           loginpassword : loginpassword
        })
      .then((res)=>{
        // console.log(res.data);
        // if(res.data[0]){
        //   console.log("Yeah! Your login is successfull")
        // }
        console.log(res)
        if(res.data == "Sorry , user is not exist , your login is fail, please try again"){
          console.log(res.data);
          setshowerror("Sorry , user is not exist , your login is fail, please try again")
        }
        else{
          console.log("Yeah! Your login is successfull");
          console.log(res.data);
          setshowsuccessmsg("Yeah! Your login is successfull")
         setshowdashboard(true)
         setshowlogin(false)

        }
       
      })
      .catch((error)=>{
        console.log(error)
      })

    }

    }
    return(
        <>
        {showlogin?<>       <div>
            <h1>Login</h1>
        </div>
        <div>
<form onSubmit={clickloginaction}>
<div align="center" class="title">
        Email
        <br />
        <input
          type="email"
          placeholder="Please enter your Email"
          class="form-control"
          // required
          onChange={(e)=>{setloginemail(e.target.value)}}
        /></div>

<div align="center" class="title">
        Password
        <br />
        <input
        name="password"
          type="text"
          placeholder="Please enter your password"
          class="form-control"
          onChange={(e)=>{setloginpassword(e.target.value)}}
        /></div>
        <div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <div>
        <p id="showerror">
          {showerror}
        </p>
      </div>
      <div>
        <p id="showsuccess">
          {showsuccessmsg}
        </p>
    
      </div>
      <div className='isha'>

<label>Not registered yet?</label>
<br />
{<Link to="/registration" >Please click here to register </Link>}
</div>
</form>
</div></>:null}
 
{showdashboard?
<div>
  <Link to="/dashboard" className="btn btn-success" style={{margin:'100px'}}>Show Your Dashboard</Link></div>:null}
       
        </>
    )
}

export default Login;
