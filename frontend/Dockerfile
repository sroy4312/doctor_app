FROM node:alpine

EXPOSE 5173

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install
RUN yarn add pm2 -g

COPY . .

CMD ["yarn", "dev"]