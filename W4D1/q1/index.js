let express=require("express");
let cookieParser=require("cookie-parser");

let app=express();
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("cookieList",{'cookie':req.cookies});
});

app.post("/",function(req,res){
     res.cookie(req.body.name,req.body.value);
    res.redirect("back");
})
app.listen(3000);