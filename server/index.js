// import express from 'express';
// import cors from 'cors';
// import router from './routes/routes.js'
// import DBConnection from './database/db.js';
// import dotenv from 'dotenv';

// dotenv.config();
// //const cors = require('cors');
// //initialize - we are running a server
// const app=express();

// //allow cross origin requests 
// app.use(cors());
// app.use('/',router);

// //port that we are running server at
// const PORT = process.env.PORT || 8000;
// DBConnection();
// //start our server ()=> callback function the moment ur server starts it performs this task
// app.listen(PORT, ()=>console.log(`server is runnung on PORT ${PORT}`));
import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
