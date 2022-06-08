// const fs = require('fs');
// import {parse} from 'url'
// import {basename,dirname,extname, parse} from "path"


// import fs from 'fs'
// let text = 'Hi this is write file Asycronus system with Node js';
// fs.writeFile('data.txt', text, 'utf-8', (error) => console.log(error));
// fs.writeFileSync('Data.txt', 'Hello node js _ This is first node js');
// fs.readFile('data.txt', 'utf-8', (error,data) => console.log(data));
// fs.renameSync('Data_renamed.txt', 'Data.txt');
// fs.rename('data.txt', 'Data_renamed.txt', (error) => console.log(error));
// fs.unlinkSync('file.txt');
// fs.unlink('Data.txt', (error) => console.log(error))
// fs.appendFileSync('Data.txt', ' Added new data by append Syncronus method');
// fs.appendFile('Data.txt', ' Added new data', 'utf-8', (error,data) => console.log(data))

// let url = parse('http://example.com?name=hasan')
// console.log(url);

// let url = parse("https://example.com/server/nodejs/pathsystem.js")
// console.log(url);


import http from 'http'
import fs from "fs"

let data = fs.readFileSync('db.json')
let single_data = JSON.parse(data)
http.createServer((req,res) => {
      res.writeHead(200,{"content-type" : "application/json"})
      console.log(req.url);
      if (req.url === "/") {
            res.write(data);
      } else if(req.url === "/products") {
            res.write(JSON.stringify(single_data.products));
      }else if(req.url === "/categories") {
            res.write(JSON.stringify(single_data.categories));
      }else if(req.url === "/tags") {
            res.write(JSON.stringify(single_data.tags));
      }else {
            res.write(JSON.stringify({
                  "status" : "No data founds"
            }))
      }
      res.end()
}).listen(5050, () => console.log("server is runing 5050 port"))
