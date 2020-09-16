FROM node:14-slim

RUN npm i -g rimraf

WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["node", "dist/main"]