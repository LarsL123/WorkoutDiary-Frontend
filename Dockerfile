# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# copying package.json and installing dependencies before copying the rest of the files enables better caching
COPY package.json /app
RUN npm install

# installing react
RUN npm install react-scripts@3.0.1 -g

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy the rest of the files
COPY . ./

# start app
CMD ["npm", "start"]