FROM node:18-alpine

WORKDIR /app

# copy service package files
COPY quotes-service/package*.json ./

# copy utils package into expected location
COPY node-utils /app/../node-utils

# install dependencies (includes local utils package)
RUN npm install

# copy rest of quotes-service code
COPY quotes-service .

CMD ["node", "server.js"]
