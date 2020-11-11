const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

openDb().then((db) => {
  db.migrate({ migrationsPath: './src/migrations', force: 'last' });
});
