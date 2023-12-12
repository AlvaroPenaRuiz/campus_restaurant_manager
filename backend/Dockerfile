FROM node:lts-bullseye-slim

WORKDIR /app
EXPOSE 3000

COPY ./package.json .
COPY ./yarn.lock .
COPY ./src/ ./src/
COPY ./prisma/ ./prisma/

RUN yarn install

CMD ["yarn", "prod"]