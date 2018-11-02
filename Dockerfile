FROM node:8.9.4

RUN npm install strapi@alpha -g

RUN mkdir -p app

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app
RUN ls -la

ENV PORT=1337

EXPOSE 1337

ENTRYPOINT ["strapi","start"]
