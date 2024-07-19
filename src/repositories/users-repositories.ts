import User from '../models/user'
import database from './database'

const usersRepository = {
    create: (user: User, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO User (email, password) VALUES (?, ?);'
        const params = [user.email, user.password]

        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })

    },

    getAll: (callback: (users: User[]) => void) => {
        const sql = 'SELECT * FROM User;'
        const params: any[] = []

        database.all(sql, params, function(_err: Error | null, rows: any[]) {
            if (_err) {
                throw new Error('Database query failed');
            }

            // Garantir que rows é do tipo User[]
            const users: User[] = rows.map(row => ({
                id: row.id,
                email: row.email,
                password: row.password
            }));

            callback(users);
        });


    },
    

    get: (id: number, callback: (user?: User) => void) => {
        const sql = 'SELECT * FROM User WHERE id = ?;'
        const params = [id]
        
        database.get(sql, params, function(_err: Error | null, row: any) {
            if (_err) {
                throw new Error('Database query failed');
            }
    
                // Garantir que rows é do tipo User[]
            const users: User = row

            callback(users);
        });
    
    },


    update: (id: number, user: User, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE User SET email = ?, password = ? WHERE id = ?;'
        const params = [user.email, user.password, id]

        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })

    },

    delete: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM User WHERE id = ?;'
        const params = [id]
        
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },


}

export default usersRepository
