FROM node:18-alpine

WORKDIR /usr/src/app

ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm install

ADD . .
RUN npm run build

ENV PORT=8000
EXPOSE 8000


CMD [ "node", "dist/server.js" ]