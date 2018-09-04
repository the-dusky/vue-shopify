<template>
    <div v-if="isLoggedIn">
        <img 
            v-for="image in allImages"
            :src="image.link"
            :key="image.id"
        >
    </div>
    <div v-else>
        Log in to see image list.
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["isLoggedIn", "allImages"]),
  methods: mapActions(["fetchImages"]),
  created() {
    if (this.isLoggedIn === true) {
      this.fetchImages();
    }
  }
};
</script>

<style>
</style>
