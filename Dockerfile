# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.



FROM node:argon

RUN mkdir -p /usr/project/app
WORKDIR /usr/project/app

COPY . /usr/project/app/
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]