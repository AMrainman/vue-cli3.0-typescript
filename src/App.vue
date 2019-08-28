<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* 滚动条样式重置 */
::-webkit-scrollbar {
  width: 10px; /*滚动条的宽度*/
  height: 8px; /*滚动条的高度*/
}
::-webkit-scrollbar-track-piece {
  background-color: #fff; /*滚动条的背景颜色*/
  border-radius: 0; /*滚动条的圆角宽度*/
}
::-webkit-scrollbar-thumb:horizontal {
  /*水平滚动条的样式*/
  width: 4px;
  background-color: #cccccc;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:horizontal:hover {
  /*水平滚动条的hover样式*/
  background-color: #9f9f9f;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:vertical {
  /*垂直滚动条的样式*/
  background-color: #999;
  border-radius: 4px;
  border: 2px solid #fff;
}
</style>
