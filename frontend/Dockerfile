FROM node:lts-bullseye-slim

WORKDIR /app
EXPOSE 6116

COPY ./package.json .
COPY ./yarn.lock .
COPY ./index.html .
COPY ./vite.config.ts .
COPY ./src/ ./src/

RUN yarn install

CMD ["yarn", "dev"]