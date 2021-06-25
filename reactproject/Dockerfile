# base image
FROM node:12

# set working directory
WORKDIR /usr/react/app

# add `/usr/react/app/node_modules/.bin` to $PATH
ENV PATH /usr/react/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./package.json /usr/react/app/package.json
RUN npm install

# start app
CMD ["npm", "start"]