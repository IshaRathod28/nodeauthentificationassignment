const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());

var mysql =require("mysql");
var con=mysql.createConnection({
    host:"192.168.2.8",
    user:"trainee",
    password:"trainee@123",
    database:"trainee"
})

con.connect(function(error){
    if(error) throw error;
    console.log("Database is connected");
});

// const createtable=()=>{
//     sql="CREATE TABLE isharegdata ( recid bigint(20),firstname VARCHAR(100), lastname VARCHAR(100),email varchar(100),password varchar(255),accesstoken varchar(255))"
//     con.query(sql,(err,result)=>
//     {
//         if (err) throw err;
//         console.log("your table is created");
//     })
// }

// createtable()



app.post("/regdata",(req,res)=>{
    const firstname = req.body.firstname;
    const lastname=req.body.lastname;
    const email=req.body.email;
    const password=req.body.password;
    const sql=`insert into isharegdata(firstname,lastname,email,password)values('${firstname}' , '${lastname}' , '${email}' , '${password}') `

    con.query(sql,(error,result)=>{
        if (error) throw error;
        console.log("Data is inserted data successfully")
        console.log(result)
    }
   
    )


})
app.listen(8005,()=>console.log("your server is running on the port number 8005"))
