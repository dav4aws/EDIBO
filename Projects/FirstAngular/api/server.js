const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./FirstDB.db');

db.serialize(function () {
    db.run("CREATE TABLE contacts (info TEXT)");

    var stmt = db.prepare("INSERT INTO contacts VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Davids " + i);
    }

    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM contacts", function (err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close();

const app = express();
let port = process.env.PORT || 4000;

const server = app.listen(function () {
    console.log('Listening on port ' + port);
});