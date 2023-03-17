import React,{useEffect,useState} from 'react';
import axios from "axios"
function Login(){
    const[loginemail,setloginemail]=useState("");
    const[loginpassword,setloginpassword]=useState("");
    const[data,setdata]=useState([]);
    const clickloginaction=async(e)=>{
        e.preventDefault();
       
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
        }
        else{
          console.log("Yeah! Your login is successfull");
          console.log(res.data)
        }
       
      })
      .catch((error)=>{
        console.log(error)
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
          // required
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
