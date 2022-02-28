<template>
  <div class="my-slider">
    <div class="my-slider__tooltip" :style="style">
      <el-button
        class="my-slider__tooltip-wrapper"
        size="mini"
      >
        {{ slider }}
      </el-button>
    </div>
    <el-slider
      v-model="slider"
      :format-tooltip="(value) => `${value}`"
      :show-tooltip="false"
      show-stops
      :min="min"
      :max="max"
      :step="10"
      @input="input"
    ></el-slider>
  </div>
</template>

<script>
  export default {
    name: 'MySlider',
    model: {
      prop: 'value',
      event: 'change',
    },
    props: {
      value: {
        type: Number,
        default: 100,
      },
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 100,
      },
    },
    data() {
      return {
        slider: this.value,
      }
    },
    watch: {
      value(newValue) {
        this.slider = newValue
      },
    },
    computed: {
      style() {
        const length = this.max - this.min,
          progress = this.slider - this.min,
          left = progress / length * 100
        return {
          paddingLeft: `${left}%`,
        }
      },
    },
    methods: {
      input(value) {
        //this.$emit('change', value)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .my-slider {
    .my-slider__tooltip {
      text-align: left;
      .my-slider__tooltip-wrapper {
        height: 32px;
        transform: translateX(-50%);
        top: -50%;
      }
    }
  }
</style>
