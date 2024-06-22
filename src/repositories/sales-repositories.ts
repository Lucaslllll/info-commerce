import Sale from '../models/sale'
import database from './database'

const salesRepository = {
    create: (sale: Sale, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO Sales (product, value, date_sales, user_id) VALUES (?, ?)'
        const params = [sale.product, sale.value, sale.date_sales, sale.user_id]

        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })

    },

}

export default salesRepository
