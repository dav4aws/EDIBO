const  sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../../db/my.db');

db.all("SELECT * FROM reports",[],(err=any,rows=any)=>{
  reports=rows;
})