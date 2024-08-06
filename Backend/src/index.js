const express = require ('express');
import mongoose from 'mongoose';
const app = express();

main().then((res)=>{
console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/UsersS');
}
let port = 8080;
app.listen(port, ()=>{
console.log(`Server is listening ${port}`);
});

