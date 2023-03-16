import React,{useEffect,useState} from 'react';
import axios from "axios"
function Login(){
    const[loginemail,setloginemail]=useState("");
    const[loginpassword,setloginpassword]=useState("");
    const clickloginaction=async(e)=>{
        e.preventdefault();
        const res= await axios.post("",{
           loginemail : loginemail,
           loginpassword : loginpassword
        })
    }
    return(
        <>
        <div>
            <h1>Login</h1>
        </div>
        <div>
<form onSubmit={clickloginaction}>
<div align="center" class="title">
        Email
        <br />
        <input
          type="text"
          placeholder="Please enter your Email"
          class="form-control"
          required
          onChange={(e)=>{setloginemail(e.target.value)}}
        /></div>

<div align="center" class="title">
        Password
        <br />
        <input
          type="text"
          placeholder="Please enter your password"
          class="form-control"
          onChange={(e)=>{setloginpassword(e.target.value)}}
        /></div>
        <div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
</form>
        </div>
        </>
    )
}

export default Login;
