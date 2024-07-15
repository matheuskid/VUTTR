FROM node:20.14.0-alpine

WORKDIR /VUTTR
COPY package*.json ./
RUN npm install
COPY . .
CMD npm start