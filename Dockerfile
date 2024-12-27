FROM node:20-alpine
WORKDIR /app
COPY package*.json .
#RUN npm install express && npm install -g nodemon && apk add --no-cache curl
RUN npm install --production && apk add --no-cache curl
COPY . .

EXPOSE 3000
#producao
CMD ["node", "app.js"]
#dev
#CMD ["nodemon","--config","nodemon.json", "app.js"]