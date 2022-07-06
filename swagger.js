require("dotenv").config({})
const swaggerAutogen = require('swagger-autogen')()
const fs = require("fs")
const path = require("path")

const port = process.env.PORT
const doc = {
    info: {
      title: 'My API',
      description: 'Description',
    },
    host: `localhost:${process.env.PORT}`,
    schemes: ['http'],
  };

const outputFile = './swagger_output.json'
const endpointsFiles = []

const route = "./routes"
let files = [];


try{

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
        getFilesRecursively(absolute);
    } else {
        files.push("./"+absolute);
    }
  }
};

getFilesRecursively(route)
console.log(files)

files = files.map((file)=>{
    return file.split("\\").join("/")
})

console.log(files)


swaggerAutogen(outputFile, files, doc).then(() => {
    require('./app.js')
    console.log(port)
})
}
catch(error){
    console.log(error)
}