<template>
  <div id="appContainer">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {SAVE_USER} from './store/mutations-type'
  export default{
    name:'app',
    components:{FooterGuide},
    async mounted(){
      let result = await this.$API.autoLogin()
      this.$store.commit(SAVE_USER,result.data)
      console.log(result)
    }
  }
</script>

<style lang="stylus">
  @import "./common/stylus/mixins.styl"
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
