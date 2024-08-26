// const http = require('http');
// const fs = require('fs');


// fs.readFile('example.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.error('This is an error in reading the file', error);
//         return;
//     } else {
//         console.log(data);
//     }
// });
// let x="This is first file"
// let obj={
//     name:'Sir Zubair',
//     email:'zubair@gmail.com',
//      password:'zubair7777'
// }
// let strData=JSON.stringify(obj);
// fs.writeFile('example.txt', strData, (error) => {
//     if (error) {
//         console.error('This is an error in writing the file', error);
//         return;
//     } else {
//         console.log('File write successfully');
//     }
// });

// fs.appendFile('example.txt','More content is here', (error) => {
//     if (error) {
//         console.error('This is an error in writing the file', error);
//         return;
//     } else {
//         console.log('File appended successfully');
//     }
// });
// fs.rename('example.txt','file.txt', (error) => {
//     if (error) {
//         console.error('This is an error in writing the file', error);
//         return;
//     } else {
//         console.log('File  name updated successfully');
//     }
// });




// // Create a writable stream

// const writeStream= fs.createWriteStream('file.txt');

// // write data to stream

// writeStream.write('Hello, ');

// writeStream.write('World!\n');

// // End the stream

// writeStream.end();

// // Handle strean events--> finish, and error

// writeStream.on('finish', () =>{

// console.log('Finished writing'); 
//     });

// writeStream.on('error', (err) => {

// console.error('An error occurred:', err);

// });
// // Create a readable strean

// const readStream =fs.createReadStream('file.txt', 'utf8');

// // Handle stream events--> data, end, and error

// readStream.on('data', (chunk)=> {

// console.log('Reading chunk:', chunk);

// });

// readStream.on('end', () => {

// console.log('Finished reading');
// });

// readStream.on('error', (err) => {

// console.error('An error occurred:',err);

// });





// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('This is our first server');
// });

// server.listen(3000, 'localhost', () => { 
//     console.log('Server is Started');
// });


// const os = require('os');
// console.log(os.arch()); // e.g., 'x64'
// console.log(os.platform()); // e.g., 'linux', 'win32', 'darwin'
// console.log(os.type()); // e.g., 'Linux', 'Darwin', 'Windows_NT'
// console.log(os.release()); // e.g., '5.4.0-74-generic'
// console.log(os.uptime()); // e.g., 123456 (seconds)console.log(os.totalmem()); // e.g., 17179869184 (bytes)console.log(os.freemem()); // e.g., 8589934592 (bytes)console.log(os.cpus());console.log(os.totalmem()); // e.g., 17179869184 (bytes)
// console.log(os.totalmem()); // e.g., 17179869184 (bytes)
// console.log(os.freemem()); // e.g., 8589934592 (bytes)
// let a=os.cpus()
// console.log(JSON.stringify(a));
// // Output includes model, speed (MHz), and times (user, nice, sys, idle, irq)
// console.log(os.networkInterfaces());
// console.log(os.hostname()); // e.g., 'my-computer'
// console.log(os.homedir()); // e.g., '/Users/username'
// console.log(os.userInfo()); 
// // Output includes username, uid, gid, shell, and homedirconsole.log(os.constants);
// console.log(os.constants);
// // Output includes EOL (end of line character), and various constants related to error codes


import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
const app = express();

app.use(morgan(':method: url : status :res [content-length]:response-time ms'))

app.get('/get', ( request,response)=>{

response.send('api response got')
}) 

dotenv.config()
let  port=process.env.PORT 

app.use(express.json());

app.listen(port, () => { 
    console.log('Server has started', port);
});
