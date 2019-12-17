echo "" | sudo tee ./build/config.js
echo 'var BACKEND_URI = "'$BACKEND_URI'";'| sudo tee ./build/config.js
nginx -g daemon off;