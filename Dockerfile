FROM node:14

COPY package.json package-lock.json index.js ./

RUN npm install

CMD ["npm", "start"]