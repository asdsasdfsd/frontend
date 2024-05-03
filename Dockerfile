#Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

#Stage 2
FROM nginx:1.19.0
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
