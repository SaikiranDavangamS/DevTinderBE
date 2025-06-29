const adminAuth = (req,res,next) => {
    console.log("Admin is being authorized!!!")
    const token = "xyz";
    const isAuthorized = token ==="xyz";

    if(!isAuthorized){
        res.status(401).send("Unauthorized")
    }
    else{
        next();
    }
}
const userAuth = (req,res,next) => {
    console.log("Admin is being authorized!!!")
    const token = "xyzabc";
    const isAuthorized = token ==="xyz";

    if(!isAuthorized){
        res.status(401).send("Unauthorized")
    }
    else{
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}