import { create } from "domain";
import { mysqlDb } from "../adapters";
import {StudentEntity} from "../entities";

export class StudentRepository {
    public  create = async(estudent:StudentEntity):Promise<StudentEntity | null>  =>{
        return new Promise<StudentEntity | null>((resolve,reject)=>{
            
                mysqlDb.query("INSERT INTO students set ?",estudent,(queryError,result)=>{
                    
                    if (queryError){
                        console.error(`Error al intentar crear usuario .El error es: ${queryError}`);
                        reject(queryError);
                        return;
                    }
                    const newStudent = {
                        ...estudent,
                        id: result.insertId
                    }
                    resolve(newStudent);
                });
            
        });
    }

    public getAll =  async():Promise<StudentEntity []> =>{
        return new Promise ((resolve,reject)=>{
            mysqlDb.query( "SELECT * FROM students ORDER BY name ASC" , (error,results)=>{
                if (error){
                    console.error(`Error al listar usuarios.El error es: ${error}`);
                    reject(error);
                    return;
                }

                resolve (results as StudentEntity[]);
            });
        });
    }

    public getByiD = async(estudentId:number):Promise<StudentEntity | null> =>{
        return new Promise ((resolve,reject)=>{
            mysqlDb.query( "SELECT * FROM students WHERE id= ?" , [estudentId], (error,results)=>{
                if (error){
                    console.error(`Error al listar usuario pot id .El error es: ${error}`);
                    reject(error);
                    return;
                }

                if (results.length === 0){
                    resolve (null);
                }else{
                    resolve (results[0] as StudentEntity);
                }
            });
        });
    }

    public update = async(estudentId:number,UptStudent:StudentEntity):Promise<StudentEntity | null> =>{
        return new Promise ((resolve,reject)=>{
            mysqlDb.query( "UPDATE students  SET ?  WHERE id= ?" , [UptStudent,estudentId], (error,results)=>{
                if (error){
                    console.error(`Error al listar usuario pot id .El error es: ${error}`);
                    reject(error);
                    return;
                }

                if (results.affectedRows === 0){
                    resolve (null);
                }else{
                    resolve (UptStudent);
                }
            });
        });
    }   

    public delete = async(estudentId:number):Promise<Boolean> =>{
        return new Promise ((resolve,reject)=>{
            mysqlDb.query( "DELETE from  students  WHERE id= ?" , [estudentId], (error,results)=>{
                if (error){
                    console.error(`Error al ELIMINAR usuario.El error es: ${error}`);
                    reject(error);
                    return;
                }
                resolve (results.affectedRows >0);
            });
        });
    }  
}
