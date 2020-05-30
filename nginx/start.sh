#clear config.js file
echo "//Runtime generated config:" > ./usr/share/nginx/html/config.js

#Add all env-variables starting with "WORKOUT_" to config file.
for var in "${!WORKOUT_@}"; do
    echo 'var '$var' = "'${!var}'";' >> ./usr/share/nginx/html/config.js
done

# start nginx
nginx -g 'daemon off;'  