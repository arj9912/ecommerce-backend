# STAGE: Development
FROM node:14-alpine3.13 AS dev
EXPOSE 3000
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . /app/
RUN npx install
CMD ["npm", "run", "dev"]


