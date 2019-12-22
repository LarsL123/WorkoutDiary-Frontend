# clear config.js file
echo "" | tee ./usr/share/nginx/html/config.js
# add enviroment variables to it: 
# TODO: Make dynamic/expand.
echo 'var BACKEND_URI = "'$BACKEND_URI'";'| tee ./usr/share/nginx/html/config.js
# start nginx
nginx -g 'daemon off;' 