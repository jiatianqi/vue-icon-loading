# vue-icon-loading
- only one API, easy use.

## Getting Started
### Install

```shell
npm install vue-icon-loading -S
```
## PropTypes

| Property      | Type     | Default | Description                              |
| :------------ | :------- | :------ | :--------------------------------------- |
| type          | String   | "1"     | Available values are "1", "2", "3"          


## Usage
```javascript
//main.js
import Vue from "vue";
import vueIconLoading from "vue-icon-loading"

Vue.use(vueIconLoading);
```
```js
<template>
  <div>
    <vue-icon-loading v-show="showloading" type="1"></vue-icon-loading>
  </div>
</template>
<script>
export default {
    data(){
        return {
            showloading:ture
        }
    }
}
</script>
```