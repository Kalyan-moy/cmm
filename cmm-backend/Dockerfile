FROM node:18
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm install --save-dev nodemon

CMD ["npm", "run", "dev"]