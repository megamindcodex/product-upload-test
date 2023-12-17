<template>
  <div class="cont">
    <div class="row" v-if="image in images > 0">
        <div class="image">
            <img :src="result.imageURL" :alt="result.name">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>