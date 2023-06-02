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

//   "Server=tcp:servertectechs.database.windows.net,1433;
//   Initial Catalog=TecTechs;
//   Persist Security Info=False;
//   User ID=azureuser;
//   Password=PimientaSal02;
//   MultipleActiveResultSets=False;
//   Encrypt=True;TrustServerCertificate=False;
//   Connection Timeout=30;"

export async function connectDB() {
    try {
        const pool = await sql.connect(config);
        // const result = await pool.request().query("SELECT * FROM Datos;");
        // console.log(result)
        console.log("Connected!!");
        return pool;
    } catch(error) {
        console.error(error);
    }
  }

