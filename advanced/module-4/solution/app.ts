import * as net from "net";
import * as dns from "dns";

const server = net.createServer();

server.on("connection", socket => {
    console.log("new client connected to the server");
    socket.write("Enter the host you would like to resolve: ");

    socket.on("data", data => {
        console.log(`host recived from client: ${data.toString()}`);
        dns.resolve4(data.toString().replace("\n", ""), (err, addresses) => {
            if (err) {
                socket.write(`error occurred: ${err}\n\n`);
                return;
            }
            socket.write(`addresses for ${data}: ${addresses}\n\n`);
        });
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });
});

server.listen(3000, () => console.log("Server listening on port 3000"));
