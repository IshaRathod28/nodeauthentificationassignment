const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "trainee",
});

con.connect(function (error) {
  if (error) throw error;
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

// app.post("/regdata",(req,res)=>{
//     const firstname = req.body.firstname;
//     const lastname=req.body.lastname;
//     const email=req.body.email;
//     const password=req.body.password;

//    const sql1=`select * from isharegdata`
//    con.query(sql1,(error,result)=>{
//     if(error) throw error;
//     console.log(result);
//     console.log(email)

//    })

//    const result1=result

// })

app.post("/regdata", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const sql1 = `select * from isharegdata where email="${email}"`;
  con.query(sql1, (error, result) => {
    // if(error) throw error;
    if (result[0] != null) {
      console.log("email id is already in use");
      res.send("*Error:Your email id is already in use , please try with another email id")
    } else {
      console.log("valid email id");
      const sql = `insert into isharegdata(firstname,lastname,email,password)values('${firstname}' , '${lastname}' , '${email}' , '${password}')`;
      con.query(sql, (error, result) => {
        if (error) throw error;
        console.log("inserted data is successfully");
      });
    }
  });
  // const sql=`insert into isharegdata(firstname,lastname,email,password)values('${firstname}' , '${lastname}' , '${email}' , '${password}')`
  // con.query(sql,(error,result)=>{
  //     if (error) throw error;
  //     console.log("Data is inserted data successfully")
  //     console.log(result)
  //     res.send(result)
  // }
  // )
});

// const createlogintable =()=>{
//     sql="create table ishalogincheck (recid bigint(20) ,email varchar(100),password varchar(255))";

//     con.query(sql,(error,result)=>{
//         if(error) throw error;
//         console.log("ishalogincheck table created successfully")
//         console.log(result)
//     })
// }

// createlogintable();



app.post("/logindata",(req,res)=>{
    const loginemail = req.body.loginemail;
    const loginpassword=req.body.loginpassword;
    // const accesstoken=jwt.sign({email : loginemail},"iabcd1234");
    // console.log(accesstoken);
    // const jsql=`select * from isharegdata where accesstoken is null;`
    const csql=`select * from isharegdata where email="${loginemail}" and password="${loginpassword}"`
    con.query(csql,(error,result)=>{
        if (error){
        }
        else if(result.length==0){
            res.send("Sorry , user is not exist , your login is fail, please try again")
        }
        else if(result[0].accesstoken){
            res.send(result);
            console.log(true)
        }
        else if(!result[0].accesstoken){
            console.log(false)
            const accesstoken=jwt.sign({email : loginemail},"iabcd1234");
            console.log(accesstoken);

            const jsql="select * from isharegdata where accesstoken is null"
            con.query(jsql,(error,result1)=>{
                if (error) throw error;
                console.log(result1)
            })

            const sqlupdatetoken=`update isharegdata set accesstoken="${accesstoken}" where email="${loginemail}";`

            con.query(sqlupdatetoken,(err,result)=>{
                if(err) throw err;
                console.log(sqlupdatetoken)
                // console.log("accesstoken is updated successfully")
                console.log("accesstoken is" + accesstoken)
                res.send(result);

            console.log(result);
            })
        }

        // console.log("your data is selected successfully")
        // console.log(result)
        // res.send(result)
    }
    )

    // con.query()

})

app.listen(8005, () =>
  console.log("your server is running on the port number 8005")
);
