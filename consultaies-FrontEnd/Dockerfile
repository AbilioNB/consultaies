### STAGE 1: Build ###
FROM node AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./

#COPY consultaies-FrontEnd\package.json  package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.21.6-alpine
COPY nginx.conf /etc/nginx/nginx.conf
#COPY consultaies-FrontEnd/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/consultaies /usr/share/nginx/html
