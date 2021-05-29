<template>
  <div :style="{ width }">
    <label :for="_uid">{{ label }}</label>
    <input @input="$emit('input', $event.target.value)" :id="_uid" :value="value" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '200px',
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
div input {
  width: 100%;
}
label {
  display: inline-block;
  margin-bottom: 0.3rem;
  color: #333;
  align-self: flex-start;
}
</style>
