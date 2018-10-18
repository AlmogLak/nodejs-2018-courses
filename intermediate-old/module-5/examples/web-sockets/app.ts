import * as socket from 'socket.io';
import { Server } from 'http';
import * as express from 'express';

const app = express();
const http = new Server(app);
const io = socket(http);

const users = new Map<string, SocketIO.Socket>();
app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('register', (data: { username: string }) => {
        console.log(data);
        users.set(data.username, socket);

        console.log(`users connected: ${users.keys()}`);

    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // // listen to incomming messages
    // socket.on('message', (payload) => {
    //     console.log('a new message emitted: ', payload);
    //     // echo message
    //     socket.emit('message', payload);
    // });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});