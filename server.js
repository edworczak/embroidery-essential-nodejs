import fs from 'node:fs';
import express from 'express';

const port = 3003;

export const serveData = (data) => {
    const file = fs.readFileSync(`data/${data}.json`, {
        encoding: 'utf8',
    })
    return JSON.parse(file)
}

const server = express();

server.get('/threads', (req, res) => {
    res.send(serveData('threads'))
})

server.get('/threads/:id', (req, res) => {
    const thread = serveData('threads').filter((thread) => thread.id === req.params.id);
    res.send(thread[0])
})

server.get('/user-projects', (req, res) => {
    res.send(serveData('user-projects'))
})

server.listen(port);
console.log('embroidery essential');