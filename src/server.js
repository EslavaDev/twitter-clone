import express from 'express';
import next from 'next';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production'
const expressApp = express();
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

async function app(){
    try {
        await nextApp.prepare()
        expressApp.all('*', (req, res) => handle(req, res))
        await expressApp.listen('3000')
    } catch (error) {
        console.error(error)
    }
}

app();