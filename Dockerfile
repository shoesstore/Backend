FROM node:12

RUN node --version

RUN npm --version

RUN echo "Checking node environent"

RUN echo $NODE_ENV

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

RUN node node_modules/.bin/fusion --version

EXPOSE 2512

CMD node node_modules/.bin/fusion live
