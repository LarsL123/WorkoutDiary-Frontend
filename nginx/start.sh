# clear config.js file
echo "" | tee ./usr/share/nginx/html/config.js
# enviroment variables to be included at runtime: 
echo 'var BACKEND_URI = "'$BACKEND_URI'";'| tee ./usr/share/nginx/html/config.js
# start nginx
nginx -g 'daemon off;' 