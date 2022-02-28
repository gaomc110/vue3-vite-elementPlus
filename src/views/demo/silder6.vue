<template>
  <div class="a">
    <div class="b">

      <div class="b1">
        <div class="b2" v-for="(item,index) in list" :key="index">
          <span class="b22">{{item.name}}</span>
        </div>
        <div class="b3" ref="oa">{{name}}cm</div>
        <div class="b4" ref='ob'></div>
      </div>


    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        name:'160',
        list:[
          {name:'157',id:1},
          {name:'158',id:1},
          {name:'159',id:1},
          {name:'160',id:1},
          {name:'161',id:1},
          {name:'162',id:1},
          {name:'163',id:1},
          {name:'164',id:1},
          {name:'165',id:1},
          {name:'166',id:1},
          {name:'167',id:1},
          {name:'168',id:1},
          {name:'169',id:1},
          {name:'170',id:1},
          {name:'171',id:1},
          {name:'172',id:1}
        ]
      }
    },
    methods: {
      reload() {
        const self = this
        this.$nextTick(function () {
          this.list.map((item,index)=>{
            if(item.name == self.name) {
              Number(item.name)%2 ==0 ? self.$refs.ob.style.left = (305/12*(index+1)+index)*(document.body.clientWidth/375)+'px':self.$refs.ob.style.left = (305/12*(index+1)+index)*(document.body.clientWidth/375)+'px'
              self.$refs.oa.style.left = (305/12*(index+1)-44)*(document.body.clientWidth/375)+'px'
            }

          })

        })
      }
    },
    mounted(){
      this.reload()
    }
  }
</script>
<style scoped lang='less'>
  .b{
    width: 305px;
    height: 350px;
    overflow-x: auto;
    background: chocolate;
    margin: 0 auto;
    position: relative;
    overflow: auto;
    white-space: nowrap;
    .b3{
      color: #66B3FF;
      font-size:26px;
      position: absolute;
      left: 120px;
      top: 25px;
      width: 100px;
      text-align: center;
    }
    .b4{
      width: 1px;
      height: 60px;
      font-size:26px;
      position: absolute;
      left: 0;
      top: 62px;
      background: #66B3FF	;
    }
    .b1{

      width: 100%;
      margin-top: 30px;
      overflow: auto;
      height: 200px;
      position: relative;
      padding-bottom: 30px;
    }
    .b7{
      display: block;
      color: #FFF;

    }
    .b6{
      width:305/12+1px;
      height: 30px;
      display: inline-block;
      vertical-align: top;
      text-align: right;

    }
    .b2{
      width:305/12px;
      height: 30px;
      display: inline-block;
      vertical-align: top;
      border-top: 2px solid #c1c1c1;
      margin-top: 90px;
      position: relative;
      .b22{
        position: absolute;
        top: 30px;
        right: -9px;
        color: #FFF;
      }
    }
    .b2:nth-child(odd){
      height: 13px;
      border-right: 1px solid #c2c2c2;
    }
    .b2:nth-child(even){
      border-right: 1px solid #c2c2c2;
    }

  }
</style>
