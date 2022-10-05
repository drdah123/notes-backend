import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

//import indexRouter from("./routes/index");

const port = process.env.PORT;

import authRouter from './routes/auth.js';
import notesRouter from './routes/notes.js';

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world');
});

//app.use("/", indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

app.listen(port, () => {
  console.log(`localhost:${port}`);
});

mongoose.connect(process.env.DB_URL, () =>
  console.log('connect with mongo db')
);

export default app;
