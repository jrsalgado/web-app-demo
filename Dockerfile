FROM node:6.9.4
MAINTAINER jayro salgado
RUN npm install -g create-react-app && \
    npm install -g serve
ENV WORKDIR=/usr/src/app/
WORKDIR $WORKDIR
RUN git clone -b develop https://github.com/jrsalgado/web-app-demo.git .
RUN npm install && \
    npm run build
EXPOSE 5000
CMD ["serve", "-s", "build"]