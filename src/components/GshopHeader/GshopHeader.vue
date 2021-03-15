<template>
   <header class="header">
        <!-- <span class="header_search">
            <i class="iconfont icon-sousuo"></i>
        </span> -->
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
        <!-- <span class="header_login">
            <span class="header_login_text">登录|注册</span>
        </span> -->
    </header>
</template>

<script>
   export default {
       props:{
           title:{
               required:true,
               type:String,
               default:'硅谷外卖'
           }
       }
   }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>