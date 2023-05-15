FROM node:16.17.1
WORKDIR /backend
COPY . .
RUN npm install npm
RUN npm install package.json
ENTRYPOINT ["npm", "run", "start:prod"]