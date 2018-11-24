import * as cluster from "cluster";
import * as os from "os";

if (cluster.isMaster) {
    const cpus = os.cpus().length;
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
} else {
    require("./server");
}
