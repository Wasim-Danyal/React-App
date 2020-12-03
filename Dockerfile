FROM node:13.12.0-alpine
WORKDIR /app
EXPOSE 3000
RUN npm install -g server
COPY . .
RUN npm install
CMD ["npm", "start"]