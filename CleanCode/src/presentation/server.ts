import express, { Router } from "express";

interface Options{
    port?:number,
    routes:Router
}

export class Server {
    public readonly app = express();
    public readonly port:number;
    public readonly routes:Router;

    constructor(options:Options){
        const {port=4200,routes} = options
        this.port=port;
        this.routes=routes;
    }

    async start (){
        this.app.use(express.json());
        ///allows parameters
        this.app.use(express.urlencoded({extended:true}));
        
        this.app.use(this.routes);
        this.app.listen(this.port,()=>{
            console.log(`SErver running on port: ${this.port}`);
            
        })
    }
}