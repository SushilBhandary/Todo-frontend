FROM node:20-alpine

WORKDIR /app

COPY package* .
COPY public .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]