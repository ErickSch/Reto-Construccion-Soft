import "dotenv/config";
import sql from "mssql";

// const config = {
//     user: 'Erick',
//     password: '123456',
//     // server: 'LAP-ASUS-E\\SQLEXPRESS', 
//     server: 'localhost', 
//     database: 'northwind',
//     options: {
//         encrypt: true,
//         trustServerCertificate: true,
//     },
//   };

const config = {
    user: 'azureuser',
    password: 'PimientaSal02',
    server: 'servertectechs.database.windows.net', 
    database: 'TecTechs',
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
  };

export async function connectDB() {
    try {
        const pool = await sql.connect(config);
        console.log("Connected!!");
        return pool;
    } catch(error) {
        console.error(error);
    }
  }

