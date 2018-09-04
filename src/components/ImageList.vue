<template>
    <div>
        <div v-if="isLoggedIn" class="image-container">
            <img 
                v-for="image in allImages"
                :src="image.link"
                :key="image.id"
            />
        </div>
        <h2 v-else>Log in to get started!</h2>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters(['isLoggedIn', 'allImages']),
  methods: mapActions(['fetchImages']),
  created() {
    if (this.isLoggedIn === true) {
      this.fetchImages();
    }
  }
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 0 5px 5px;
}
</style>
