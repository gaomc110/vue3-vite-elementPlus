<template>
  <div class="hello">

      <span class="demonstration">显示间断点</span>
      <el-slider
        v-model="value1"
        :step="1"
        :max="48"
        :format-tooltip="formatTooltip"
        :marks="shutDownMarks"
        @change="onchange"
        @input="oninput"
        @mousedown.native="mousedown"
        @mouseup.native=""
        ref="silder"
        >
      </el-slider>
    <!--<slider :planNum.sync="plan" :color="['#D6FF7F','#00B3CC']"></slider>
    <slider :planNum.sync="plan1" :color="['#ED7B84','#9055FF']"></slider>-->
    <slider :planNum.sync="plan2" :disWid.sync="disWid" :color="['#2F80ED']"></slider>
    <!--<slider :planNum.sync="plan3"></slider>-->

    <!--<my-slider v-model="luminosity"></my-slider>-->


    <!-- 如何动态传入日期，日期为起始时间长度为15天-时间控件 -->
    <el-date-picker
      v-model="checkDateEnd"
      value-format="timestamp"
      type="date"
      placeholder="请选择日期"
    >
    </el-date-picker>

    <!-- 滑块 -->
    <el-slider
      v-model="setSelectDate"
      :step="1"
      :min="1"
      :max="15"
      :format-tooltip="formatTooltip2"
      @change="changeDate"
      show-stops>
    </el-slider>
    <br />

    <my-slider3 :min=0 :max=100 v-model="per" :disPre="disPre"></my-slider3>
    <br />

    </div>

</template>

<script>
  import slider from './Test2'
  import MySlider from './silder2'
  import MySlider3 from './Silder3'
  export default {
    name: 'HelloWorld',
    components:{
      slider,
      MySlider,
      MySlider3
    },
    data () {
      return {
        value1: 0,
        value2: 0,
        per:3,
        disPre:12,
        plan2: 50,
        disWid:60,
        shutDownMarks:{
          0:'00:00',
          24:{
            style:{
              color:'#1989FA'
            },
            label: this.$createElement('strong','12:00')
          },
          44:{
            style:{
              color:'#1989FA'
            },
            label: this.$createElement('strong','22:00')
          },
          48: '24:00'
        },
        checkDateEnd: null, //时间控件
        setSelectDate: 1,//slider滑块
        setSelectTime: '',//设置的时间
      }
    },
    created() {

    },
    methods: {
      formatTooltip (val) {
        let hour = 0
        let min = 0
        let ms = val * 1800
        hour = parseInt(ms / 3600)
        if (hour < 10) {
          hour = '0' + hour.toString()
        } else {
          hour = hour.toString()
        }
        min = ms % 3600
        if (min === 0) {
          min = '00'
        } else {
          min = '30'
        }
        let time = hour + ':' + min
        console.log(time)
        return time
      },
      onchange(value){

      },
      oninput(value){
        console.log(value)
      },
      mousedown(event){
        console.log(event)

        if(event.clientX<100){
          event.preventDefault()
          return;
        }
      },
      //滑块 自定义的格式化处理函数
      //选择时间控件之后，在选择的时间上，往前倒推15天
      formatTooltip2(val) {
        if(this.checkDateEnd != null){
          let time = this.checkDateEnd
          if(val !== 15){
            time = time - ((15-val) * 86400000)
          }
          this.setSelectTime = time
          let nowDate = this.dateFormat2(parseInt(time));//格式化时间
          return nowDate
        }else{
          return;
        }
      },
      //滑块选择时间时，发起请求
      changeDate(){
        /*this.$http.post('xxxxxxxxxxxxxx', {
          checkDateEnd : this.setSelectTime
        }, res => {
          if (res.code === 0) {
            //接口请求成功之后TODO
          }
        })*/
      },
      //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
      dateFormat2(time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        // 拼接
        return year + '-' + month + '-' + day;
      }

    }
  }
</script>

<style lang="scss" scoped>
  .hello{
    padding: 40px;
  }


</style>
