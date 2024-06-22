import User from '../models/user'
import database from './database'

const usersRepository = {
    create: (user: User, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO User (email, password) VALUES (?, ?)'
        const params = [user.email, user.password]

        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })

    },

}

export default usersRepository
