FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm install express && npm install -g nodemon
COPY app.js .

EXPOSE 3000

CMD ["nodemon","--config","nodemon.json", "app.js"]