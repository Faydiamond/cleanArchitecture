import { envs } from "./config"
import { Server } from "./presentation"
import { AppRoutes } from "./presentation"

(()=>{
    main()
})()


async function main (){
    new Server({
        port: envs.SERVER_PORT,
        routes: AppRoutes.routes
    }).start()
}