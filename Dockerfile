# base image
FROM node:9.6.1

# Create app directory
RUN mkdir /git/app-web
WORKDIR /git/app-web

# Install app dependencies
COPY package.json /git/app-web
RUN npm install

# Start app
CMD ["npm", "start"]
