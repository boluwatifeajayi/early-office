const customValidation  = (schema, data) =>{
    return (req,res,next) => {
        const validData = data == "body" ? req.body  : data == "query" ? req.query  : data == "param" ? req.params : data

        const validationResult = schema.validate(validData)
        const {error} = validationResult

        const valid = error == null; 
  
        if (valid)  next(); 
        else { 
          const { details } = error; 
          const message = details.map(detail => detail.message).join(',');
          console.log("error", message); 
          res.status(422).json({ error: message });
        } 
    }
}

module.exports = customValidation