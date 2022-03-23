import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import deviceRoutes from './devices.js'

const app = express();


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/devices', deviceRoutes)

const CONNECTION_URL = 'mongodb+srv://marinconz:Crea4731@cluster.1d6az.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true} )
    .then(()=>app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));
