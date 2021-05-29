<template>
  <div class="search-input">
    <input
      type="text"
      placeholder="Пошук по сайту"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
    <button>Search</button>
  </div>
</template>

<script>
export default {
  name: 'SiteSearchInput',

  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.search-input {
  background: #fff;
  padding-left: 0.8rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
}

.search-input input {
  flex-grow: 1;
  border: none;
}

input:focus {
  outline: none;
  border: none;
}

input::placeholder {
  font-weight: 600;
  font-size: 12px;
  color: #333;
  text-transform: uppercase;
}

.search-input button {
  background: #b30c1d;
  border-radius: 2px;
  border: 3px solid #fff;
  padding: 0.5rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
}
</style>
