const express=require("express");
const sequelize=require("./config/connection");
const {Traveller,Trip,Location}=require('./models');
const routes=require('./routes/allroutes');


const app=express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);
sequelize.sync({force:false}).then(()=>{
  app.listen(PORT,()=>{
    console.log("listening Namees 3001 local host");
  });
});