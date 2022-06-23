const express=require("express");
const bodyParser=require("body-parser");
//const mailchimp = require("@mailchimp/mailchimp_marketing")
const app=express();




const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
  apiKey: "f5f1828ca1e229e647a90445c59ea603-us11",
  server: "us11",
});
app.get("/a",function(req,res){
  res.redirect("https://www.google.com")
})
const listId = "82e2e6b46c";
// async function run() {
//   /*const response = await mailchimp.ping.get();
//   console.log(response);*/
//   const response = await mailchimp.lists.getList(listId);
//   console.log(response);
// }
//
// run();






/*const run = async () => {
  const response = await mailchimp.lists.addListMember(listId, {
    email_address: "eadddsrsdsgs5@gssxmaill.eu",
    status: "subscribed",
    merge_fields: {
               FNAME: "fNrvamed",
               LNAME: "lNarvmed",

           },
  });
  //console.log(Error);
};

run();
async function run() {
        try{
            const response = await mailchimp.lists.addListMember(listId, {
                email_address: "subscribingUserewfwfmail@sddfca.com",
                status: "subscribed",
                merge_fields: {
                    FNAME: "subscribingUser.firstName",
                    LNAME: "subscribingUser.lastName"
                },
            });
            console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
            //res.sendFile(__dirname + "/success.html");
        } catch (e){
            console.log(e.status);
            //res.sendFile(__dirname + "/failure.html");
        }

    }
run();*/

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
const fName=req.body.fName;
const lName=req.body.lName;
const eadd=req.body.eadd;



const listId = "82e2e6b46c";
// async function run() {
//   /*const response = await mailchimp.ping.get();
//   console.log(response);*/
//   const response = await mailchimp.lists.getList(listId);
//   console.log(response);
// }
//
// run();






const run = async () => {
  try{
  const response = await mailchimp.lists.addListMember(listId, {
    email_address: eadd,
    status: "subscribed",
    merge_fields: {
               FNAME: fName,
               LNAME: lName,

           },
  });
  console.log(response.id);
  res.sendFile(__dirname+"/s.html");

}
catch(e){
  console.log(e.status)
  res.sendFile(__dirname+"/f.html");

}
};
run();






































})
app.post("/post",function(req,res){
  res.redirect("/")
})
app.listen(process.env.PORT||3000,function(){
  console.log("its running");
})
//f5f1828ca1e229e647a90445c59ea603-us11
