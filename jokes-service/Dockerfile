FROM node:18-alpine

WORKDIR /app

# copy service package files
COPY jokes-service/package*.json ./

# copy utils package into expected location
COPY node-utils /app/../node-utils

# install dependencies (includes local utils package)
RUN npm install

# copy rest of jokes-service code
COPY jokes-service .

CMD ["node", "server.js"]
