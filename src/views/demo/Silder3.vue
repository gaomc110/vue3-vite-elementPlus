<template>
  <div class="slider" ref="slider">
    <div class="process" :style="{width}"></div>
    <div class="thunk" ref="trunk" :style="{left}">
      <div class="block"></div>
      <div class="tips">
        <span>{{(scale*100).toFixed(2)}}==={{per}}</span>
        <i class="fas fa-caret-down" ></i>
      </div>
    </div>
    <div class="ub ub-f1 ruler">
      <div v-for='(val,idx) in (rangeMax-rangeMin)' class="uabs-tr cm" :style="{'left': (idx/rangeMax)*100 + '%'}"><span class="b22">{{idx}}</span></div>
      <!--<div class="uabs-tr sc-text">{{rangeMax}}</div>-->
    </div>
  </div>
</template>
<script>
  /*
  * min 进度条最小值
  * max 进度条最大值
  * v-model 对当前值进行双向绑定实时显示拖拽进度
  * */
  export default{
    props:['min','max','value','disPre'],
    data(){
      return{
        slider:null,        //滚动条DOM元素
        thunk:null,         //拖拽DOM元素
        per:this.value,     //当前值
        rangeMax: 25,
        rangeMin: 0,
      }
    },
    //渲染到页面的时候
    mounted () {
      this.slider = this.$refs.slider;
      this.thunk = this.$refs.trunk;
      let _this = this;
      this.thunk.onmousedown = function (e) {
        let width = parseInt(_this.width);
        let disX = e.clientX;
        document.onmousemove = function(e){
          // value, left, width
          // 当value变化的时候，会通过计算属性修改left，width

          // 拖拽的时候获取的新width
          let newWidth = e.clientX - disX + width;

          // 拖拽的时候得到新的百分比
          let scale = newWidth / _this.slider.offsetWidth;
          //console.log(scale)
          /*_this.per = Math.ceil((_this.max - _this.min) * scale + _this.min);
          _this.per = Math.max(_this.per,_this.min);
          _this.per = Math.min(_this.per,_this.max);*/

          let aa =(_this.disPre * (_this.slider.offsetWidth/24)) / _this.slider.offsetWidth

          if(scale<aa) {

            _this.per = Math.ceil((24 - 0) * scale + 0);
            //_this.per = Math.max(_this.per,0);
            //_this.per = Math.min(_this.per,24);
          }


          //_this.$emit('input', _this.per)
        }
        document.onmouseup = function(){
          document.onmousemove = document.onmouseup = null;
        }
        return false;
      }
    },
    computed:{
      // 设置一个百分比，提供计算slider进度宽度和trunk的left值
      // 对应公式为  当前值-最小值/最大值-最小值 = slider进度width / slider总width
      // trunk left =  slider进度width + trunk宽度/2
      scale(){
        console.log(this.max - this.min)
        console.log(this.per - this.min)

        // return (this.per - this.min) / (this.max - this.min);
        return (this.per - 0) / (24 - 0);
      },
      width(){
        if(this.slider){
          return this.slider.offsetWidth * this.scale + 'px';
        }else{
          return 0 + 'px'
        }
      },
      left(){
        if(this.slider){
         /* console.log(this.scale)
          console.log(this.slider.offsetWidth)
          console.log(this.slider.offsetWidth* this.scale)
          console.log(this.slider.offsetWidth / 24)
          console.log(this.thunk.offsetWidth)*/
          return this.slider.offsetWidth * this.scale -  this.thunk.offsetWidth/2  + 'px';
        }else{
          return 0 + 'px'
        }
      }
    },
  }
</script>
<style scoped lang="scss">
  .box{margin:100px auto 0;width:80%}
  .clear:after{content:'';display:block;clear:both}
  .slider{position:relative;margin:20px 0;width:100%;height:10px;background:#e4e7ed;border-radius:5px;cursor:pointer}
  .slider .process{position:absolute;left:0;top:0;width:112px;height:10px;border-radius:5px;background:#409eff}
  .slider .thunk{position:absolute;left:100px;top:-7px;width:20px;height:20px;z-index: 101;}
  .slider .block{width:20px;height:20px;border-radius:50%;border:2px solid #409eff;background:rgba(255,255,255,1);transition:.2s all}
  .slider .tips{position:absolute;left:-7px;bottom:30px;min-width:15px;text-align:center;padding:4px 8px;background:#000;border-radius:5px;height:24px;color:#fff}
  .slider .tips i{position:absolute;margin-left:-5px;left:50%;bottom:-9px;font-size:16px;color:#000}
  .slider .block:hover{transform:scale(1.1);opacity:.6}

  .ub {
    /*display: -webkit-box !important;
    display: box !important;*/
    position: relative;
    .uabs-tr {
      position: absolute;
      right: 0;
      top: 14px;
      z-index: 100;
    }
  }

  .ruler .cm{
    /*position: relative;
    border-left: 1px solid #555;
    height: 14px;
    width: 10%;*/
    width:305/12px;
    height: 20px;
    display: inline-block;
    vertical-align: top;
    border-top: 2px solid #c1c1c1;
    margin-left: 0.3px;
    position: relative;
    .b22{
      position: absolute;
      top: 20px;
      right: -9px;
    }
  }

  .cm:nth-child(odd){
    height: 13px;
    border-right: 1px solid #c2c2c2;
  }
  .cm:nth-child(even){
    border-right: 1px solid #c2c2c2;
  }

  /*.ruler .cm:after {
    position: absolute;
    bottom: -15px;
    font: 11px/1 sans-serif;
  }

  .ruler .cm:nth-of-type(1) {
    left: 0%;
  }

  .ruler .cm:nth-of-type(2) {
    left: 10%;
  }

  .ruler .cm:nth-of-type(3) {
    left: 20%;
  }
  .ruler .cm:nth-of-type(4) {
    left: 30%;
  }

  .ruler .cm:nth-of-type(5) {
    left: 40%;
  }

  .ruler .cm:nth-of-type(6) {
    left: 50%;
  }

  .ruler .cm:nth-of-type(7) {
    left: 60%;
  }

  .ruler .cm:nth-of-type(8) {
    left: 70%;
  }

  .ruler .cm:nth-of-type(9) {
    left: 80%;
  }

  .ruler .cm:nth-of-type(10) {
    left: 90%;
  }

  .ruler .cm:nth-of-type(11) {
    left: 100%;
  }
  */
</style>

