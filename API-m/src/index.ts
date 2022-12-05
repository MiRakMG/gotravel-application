import * as express from "express"
import { createServer } from "http";
import { AppDataSource } from "./data-source"
import { clientRouter } from "./Routes/clients.routes";
import { contentRouter } from "./Routes/contenir.routes";
import { faireRouter } from "./Routes/faire.routes";
import { hotelRouter } from "./Routes/hotel.routes";
import { prendreRouter } from "./Routes/prendre.routes";
import { prestRouter } from "./Routes/prestation.routes";
import { saisonRouter } from "./Routes/saison.routes";
import { typeRouter } from "./Routes/type.routes";

AppDataSource.initialize().then(async () => {

    const app = express()
    const server = createServer(app)
    const port: number | string = process.env.PORT || 4000

    // Setup the cors security
    const cors = require('cors')
    const corsOptions ={
        origin:'*', 
        credentials:true,
        optionSuccessStatus:200
    };
    app.use(cors(corsOptions))
    app.use(express.json())

    app.use('/prestations', prestRouter)
    app.use('/clients', clientRouter)
    app.use('/hotels', hotelRouter)
    app.use('/saisons', saisonRouter)
    app.use('/types', typeRouter)
    app.use('/contenir', contentRouter)
    app.use('/prendre', prendreRouter)
    app.use('/faire', faireRouter)

    server.listen(port, () => {
        console.log(`The server is running on the port ${port}`);
    });

}).catch(error => console.log(error))
