<template>

  <header>
    <x-header />
  </header>

  <main>
    <div class="page-container">
    <router-view />
    </div>
  </main>

  <footer>
    <x-footer />
  </footer>

</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import { XHeader, XFooter } from '@/components/fragments'

@Options(
  { 
    name : 'Layout',
    components : {
      XHeader, XFooter
    }
  }
)
export default class Layout extends Vue {

}
</script>

<style lang='scss' scoped>

</style>