pm2 start server.js -i max
pm2 monit server
pm2 scale server 1
pm2 stop server
pm2 delete server