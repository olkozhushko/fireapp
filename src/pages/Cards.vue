<template>
  <div>
    <header :style="{ background: opened ? 'dodgerblue' : '' }">
      <button @click="toggle">{{ opened ? 'Close' : 'Open' }}</button>
      <div class="logo">Logo</div>
      <h1>My Site</h1>
      <section class="menu" v-if="opened">
        <SiteSearchInput style="margin: 15px 0" v-model="search" />
        <h2>{{ search || 'Some content is here' }}</h2>
      </section>
    </header>
  </div>
</template>

<script>
import SiteSearchInput from '@/components/SiteSearchInput.vue';
export default {
  name: 'Cards',

  components: {
    SiteSearchInput,
  },

  data() {
    return {
      opened: false,
      search: '',
    };
  },

  methods: {
    toggle() {
      this.opened = !this.opened;
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 64px;
  background: orange;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  font-size: 60px;
  font-weight: 700;
  color: #fff;
}

.menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: dodgerblue;
  height: 400px;
  padding: 0 3rem;
}
.menu h2 {
  color: #fff;
  font-size: 54px;
  text-align: center;
  margin-top: 3rem;
}
</style>
