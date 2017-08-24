<template>
  <div id="list">
        <ul>
            <li v-for="item in items">
                <dl>
                    <dt>阿斯打扫打扫</dt>
                    <dd>阿斯打扫大</dd>
                    

                </dl>


            </li>


        </ul>


  </div>
</template>
<script>

export default {
    name:"list",

    data(){
        return{
            items:[
                    {
                      
                    },


            ]

        }

    }


}
</script>

<style>

</style>

