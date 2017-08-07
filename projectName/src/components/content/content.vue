<template>
    <div id="content">
  
        <vmenu></vmenu>
        <router-view name="index"></router-view>
    </div>
</template>
<script>
import vmenu from '../menu/menu';

export default {

  name:"content",
  components:{
    vmenu,

  },
  data(){
    return{



    }

  }

}
</script>

<style>

</style>

