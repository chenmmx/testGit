<template>
  <div>
    <mt-header title="宿舍管理系统(管理员)"></mt-header>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../assets/img/lunbo1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/lunbo2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/lunbo3.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'stumanage'}">
                <span class="mui-icon mui-icon-person"></span>
                <div class="mui-media-body">学生管理</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">信息查询</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-paperclip"></span>
                <div class="mui-media-body">公寓管理</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-download"></span>
                <div class="mui-media-body">数据备份</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">问题反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-compose"></span>
                <div class="mui-media-body">出入登记</div></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'aaaa',
      password: 123455
    }
  },
  created () {
    // var params = new URLSearchParams()
    // params.append('username', this.username)
    // params.append('password', this.password)
    // this.$ajax.post('/test', params)
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mui-table-view.mui-grid-view {
  background-color: #fff;
}
.mui-table-view.mui-grid-view li {
  border: none;
}
</style>
