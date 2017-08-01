<template>

<div id="app">
  
<vhead></vhead>

<router-view></router-view>


</div>
 
</template>

<script>
import vhead from './components/head/head';

export default {
  name: 'app',
  components: {
    vhead,
    
  }
}
</script>

<style>
@import '/static/font-awesome/css/font-awesome.min.css';
@import '/static/base.css';




</style>
