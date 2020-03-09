import express from 'express';
import next from 'next';
import path from 'path';
import routes  from './routes';

const dev = process.env.NODE_ENV !== 'production'
const expressApp = express();
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

async function app(){
    try {
        await nextApp.prepare()
        expressApp.all('*', (req, res) => handle(req, res))
        await expressApp.listen('5000')
    } catch (error) {
        console.error(error)
    }
}

app();