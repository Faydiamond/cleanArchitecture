import mysql from "mysql";
import { envs } from "../config"

const mysqlDb = mysql.createPool({
    connectionLimit:500,
    host:envs.MYSQL_LOCALHOST,
    user:envs.MYSQL_USER,
    password:envs.MYSQL_PASSWORD,
    database:envs.MYSQL_DB
})

mysqlDb.getConnection((err)=>{
    if(err){
        console.error(`Error al conectarse con la db.El error es: ${err}`);
        return;
    }
}); 

export  {mysqlDb};