async function logout (req,res) {
    try{
        res.clearCookie('authToken')
        return res.status(200).json("Logout successfully")
    }catch(error){
        console.log(error)
        return res.status(500).json("Server Error")
    }
}

module.exports = {
    logout
}