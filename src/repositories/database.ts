import sqlite3 from 'sqlite3'
const DBSOURCE = 'db.sqlite'
const SQL_ITENS_CREATE = `
    CREATE TABLE User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password NOT NULL

    );

    CREATE TABLE Sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product TEXT NOT NULL,
        value DECIMAL(10,5),
        date_sales DATE,
        user_id INTEGER,
        FOREIGN KEY(user_id) REFERENCES User(user_id)
    );

    `

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Database connected successful.')
        database.run(SQL_ITENS_CREATE, (err) => {
            if (err) {
                console.log('Tables already created')
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabela User e Sales criada com sucesso. Tables user and sale')
            }
        })
    }
})
export default database
