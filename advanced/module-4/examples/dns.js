"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dns = require("dns");
dns.lookup("att.com", (err, address) => {
    console.log(`address for att.com: ${address}`);
});
dns.resolve4("att.com", (err, addresses) => {
    console.log(`addresses for att.com: ${addresses}`);
});
dns.resolve("att.com", "MX", (err, addresses) => {
    console.log(`addresses (MX records) for att.com:`, addresses);
});
dns.reverse("144.160.155.43", (err, hostnames) => {
    console.log("hostnames for 144.160.155.43: ", hostnames);
});
//# sourceMappingURL=dns.js.map