let url = require("url");
let tourfile = require("./../Model/Tour")
exports.getStudentTour = (req,res)=>{
    let  urlextract=url.parse(req.url,true);
    console.log("Welcome");
    res.json({
    name:"India",
    path:urlextract.pathname
    });
}
exports.postStudentTour=(req,res)=>{
    let obj = req.body;
    console.log(obj)
  tourfile.tourModel.create(obj).then((full,rej)=>{
    console.log("Success");
    res.json(
        {
            status:"Success",
            data:obj
        }
    )
  })
}