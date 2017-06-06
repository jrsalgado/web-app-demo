FROM node:6.9.4
MAINTAINER jayro salgado
RUN npm install -g create-react-app && \
    npm install -g serve
ENV WORKDIR=/usr/src/app/
WORKDIR $WORKDIR
COPY ./ $WORKDIR
RUN npm run build
EXPOSE 5000
CMD ["serve", "-s", "build"]