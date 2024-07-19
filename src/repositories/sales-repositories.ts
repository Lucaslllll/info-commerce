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

    getAll: (callback: (sales: Sale[]) => void) => {
        const sql = 'SELECT * FROM Sales;'
        const params: any[] = []

        database.all(sql, params, function(_err: Error | null, rows: any[]) {
            if (_err) {
                throw new Error('Database query failed');
            }


            const sales: Sale[] = rows.map(row => ({
                id: row.id,
                product: row.product,
                value: row.value,
                date_sales: row.date_sales,
                user_id: row.user_id
            }));

            callback(sales);
        });


    },


    get: (id: number, callback: (sale?: Sale) => void ) => {
        const sql = 'SELECT * FROM Sales WHERE id = ?;'
        const params = [id]

        database.get(sql, params, function(_err: Error | null, row: any){
            if(_err){
                throw new Error('Database query failed')
            }

            const sales: Sale = row

            callback(sales)

        })

    },

    update: (id: number, sale: Sale, callback: (notFound: boolean) => void ) =>{
        const sql = 'UPDATE Sales SET product = ?, value = ?, date_sales = ?, user_id = ? WHERE id = ?;'
        const params = [sale.product, sale.value, sale.date_sales, sale.user_id, id]
        
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })

    },

  

    delete: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM Sales WHERE id = ?;'
        const params = [id]

        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })

    },

}

export default salesRepository
