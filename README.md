# owl-web

> Owl messaging web client

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).



## Plan

To start the chatting you need a nick name, the nick name can be anything with more than 1 letter nad less than 25 characters.

/nick command will allow you to create a nick name, on creating the nick name you will be getting a UUID, UUID will be your reference on the server side.

User {
  nickname
  uuid
}
