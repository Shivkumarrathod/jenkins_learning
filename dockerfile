FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY server.js ./
COPY ./app ./app

EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]