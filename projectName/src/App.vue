<template>

<div id="app">
  
<vhead></vhead>
<vmenu></vmenu>

</div>
 
</template>

<script>
import vhead from './components/head/head';
import vmenu from './components/menu/menu';
export default {
  name: 'app',
  components: {
    vhead,
    vmenu,
  }
}
</script>

<style>
@import '/static/font-awesome/css/font-awesome.min.css';
@import '/static/base.css';




</style>
