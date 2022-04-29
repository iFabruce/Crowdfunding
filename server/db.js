import con from 'pg';
const Pool  = con.Pool;

export const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5433,
    database: 'pern_crowdfunding'
});

