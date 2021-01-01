<template>
  <div class="x-header">
    <span>src/components/fragments/XHeader.vue</span>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'

@Options({ name : 'XHeader' })
export default class XHeader extends Vue {

}
</script>

<style lang='scss' scoped>
.x-header {
  position: absolute;
  top : 0;
  left : 0;
  width : 100%;
  height : 48px;
  background: #000000CC;
  color : white;
}
</style>