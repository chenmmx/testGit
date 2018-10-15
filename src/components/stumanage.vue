<template>
  <div>
    <header id="header" class="mui-bar mui-bar-nav">
        <h1 class="mui-title">学生信息(全部信息)</h1>
        <a class="mui-icon mui-icon-bars mui-pull-right"></a>
    </header>
<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(data, index) in datalist" :key="index">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/img/callme.png">
            <div class="mui-media-body">
                学生姓名：{{data.stuname}}
                <p class="mui-ellipsis">所在院校：{{data.stucollege}}</p>
                <p class="mui-ellipsis">寝室号：{{data.flatID}}</p>
                <p class="mui-ellipsis">学号：{{data.stuID}}</p>
            </div>
        </a>
    </li>
</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datalist: []
    }
  },
  methods: {
  },
  created () {
    this.$ajax.get('/getlist')
      .then(res => {
        this.datalist = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
.mui-table-view {
    margin-top: 112px;
}
.mui-table-view .mui-media-object {
    line-height: 42px;
    max-width: 75px;
    height: 85px;
}
</style>
