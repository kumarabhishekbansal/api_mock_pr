module.exports=function(req,res){
    console.log(__dirname);
    // var targetFileName='GET.json'
    var targetFileName = require("./GET.json")
    var id=req.params.user_id;
    // console.log(id,typeof(id));
    let obj=targetFileName.find((val)=>{
        // console.log(val.id,parseInt(id),typeof(parseInt(id)),typeof(val.id));
        return val.id===parseInt(id)
    });
    console.log(obj);
    // res.sendFile(targetFileName, {root: __dirname});
    res.send(obj);
    // console.log(targetFileName);
}