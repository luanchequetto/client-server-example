import {createServer} from 'http';
import { readFile } from 'fs';
import {resolve} from 'path';

const server = createServer((req, res)=>{
    switch(req.url){
        case '/status':{
            res.writeHead(200);
            res.write('ok');
            res.end();            
            break;
        }
        case '/sign-in':{
            const path = resolve(__dirname, './pages/sign-int.html');
            console.log(path)
            readFile(path, (error, file)=>{
                if(error){
                    res.writeHead(500, 'Can\'t process HTML file.');
                    res.end();
                    return;
                }
                res.writeHead(200);
                res.write(file)
                res.end();

            })
            
            break;
        }
        case '/authenticate':{
            
            break;
        }
        default: {
            res.writeHead(404, 'Server not found!');
            res.end();        
        }
    }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () =>{
    console.log(`Server is listening at ${HOSTNAME}:${PORT}`)
})