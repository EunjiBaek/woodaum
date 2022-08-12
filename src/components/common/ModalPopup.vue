<template>
  <p>{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
.modal-container {
  z-index: 1001;
}
</style>
