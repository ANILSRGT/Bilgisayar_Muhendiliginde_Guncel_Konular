const auth=(req,res,next)=>{
    console.log(`Authentication işlemi ${new Date().toUTCString()}`);
    next();
}

module.exports=auth;