# syntax=docker/dockerfile:1
FROM node:18.13.0
WORKDIR /app
COPY . .
RUN npm install
RUN npm run lint
CMD ["npm", "run", "dev-host"]
EXPOSE 5173
