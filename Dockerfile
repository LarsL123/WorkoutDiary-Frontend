# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
# alpine does not have bash natively
RUN apk add bash
# copy static files
COPY --from=build /app/build /usr/share/nginx/html
# add config file
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
# add start script
COPY nginx/start.sh ./
# default http port
EXPOSE 80

CMD ["bash", "./start.sh"]