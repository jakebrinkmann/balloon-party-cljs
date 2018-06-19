FROM clojure:boot-2.7.2

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN boot build

EXPOSE 3000
CMD [ "boot", "run" ]
