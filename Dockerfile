FROM node:6.9.4
MAINTAINER jayro salgado
RUN npm install -g create-react-app && \
    npm install -g serve
ENV WORKDIR=/usr/src/app/
WORKDIR $WORKDIR
RUN git clone -b develop https://github.com/jrsalgado/web-app-demo.git . && \
    npm install && \
    npm run build && \
    npm uninstall -g create-react-app
EXPOSE 5000
CMD ["serve", "-s", "build"]