FROM node:14-alpine
WORKDIR /zadanie
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","start"]
