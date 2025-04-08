FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npx primsa generate

RUN npm build

EXPOSE 4000:3001

CMD [ "npm", "run", "start:prod" ]