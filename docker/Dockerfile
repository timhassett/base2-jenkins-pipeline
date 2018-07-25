FROM debian:jessie

MAINTAINER Tim Hassett

# expose app port to host
EXPOSE 3000

ARG NODE_VERSION=10.6.0

# install apt packages
RUN apt-get update
RUN apt-get install curl net-tools -y

# set working directory
WORKDIR /var/temp

# get node version
RUN curl https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz > nodejs.tar.gz

# extract node package
RUN mkdir /usr/local/lib/nodejs
RUN tar -xf nodejs.tar.gz -C /usr/local/lib/nodejs

# configure nodejs executable permissions, add to PATH
RUN chmod +x /usr/local/lib/nodejs/node-v$NODE_VERSION-linux-x64/bin/npm
RUN chmod +x /usr/local/lib/nodejs/node-v$NODE_VERSION-linux-x64/bin/node
ENV PATH "$PATH:/usr/local/lib/nodejs/node-v$NODE_VERSION-linux-x64/bin"

# install npm dependancies
RUN npm install express ejs

# add in source files
ADD server.js ./
ADD views/ ./views

# create node user
RUN groupadd node
RUN useradd node -g node
RUN usermod -a -G node node

# set user to use
USER node:node

# start nodejs app
CMD node server.js