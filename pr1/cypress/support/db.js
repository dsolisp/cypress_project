const sqlite3 = require('sqlite3');
const path = require('path');

class Database {
  constructor() {
    this.dbPath = path.resolve(__dirname, 'C:\\Users\\danie\\cypress\\pr1\\cypress\\resources\\chinook.db');
    this.db = new sqlite3.Database(this.dbPath);
  }

  query(sql) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row ? row.Name : null);
        }
      });
    });
  }

  close() {
    this.db.close();
  }
}

const db = new Database();
module.exports = db;
