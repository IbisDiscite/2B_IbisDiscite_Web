FROM node

RUN mkdir /web-ms
WORKDIR /web-ms

COPY package.json .

RUN npm install

ADD . /web-ms

EXPOSE 4003

CMD ["npm","start"]