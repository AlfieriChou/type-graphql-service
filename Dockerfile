FROM docker.io/node:8.15-alpine

RUN mkdir /home/type-service

WORKDIR /home/type-service

ADD . /home/type-service

RUN cd /home/type-service && npm install yarn -g && yarn

EXPOSE 4000

CMD yarn run dev
