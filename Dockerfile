FROM node:18-alpine as build-stage

WORKDIR /vtiuse

COPY . .

RUN yarn install

RUN yarn build

FROM nginx:stable-alpine as production-stage

RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone

COPY --from=build-stage /vtiuse/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g" ,"daemon off;"]
