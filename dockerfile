FROM node:16-alpine

# 컨테이너 안에 어느 위치에 app을 넣을건지 경로설정
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "run", "start"]
