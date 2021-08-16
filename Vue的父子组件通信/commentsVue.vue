<template>
<div>
<h2>---我是子组件内容↓---</h2>
<h2>{{zi_num}}</h2>
</template>

<script>
export default {
    name : comments1Vue,   
    props:{
        zi_num:Number
    }
}
</script>