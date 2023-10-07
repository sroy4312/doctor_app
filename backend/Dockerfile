FROM node:alpine

EXPOSE 7000

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --silent
RUN yarn add pm2 -g

COPY . .

CMD ["yarn", "dev"]