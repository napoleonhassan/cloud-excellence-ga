<template>
  <div class="field-wrapper">
    <span>{{ title }}</span>
    <input
      :value="modelValue"
      :type="password ? 'password' : 'text'"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'FormTextInput',
  emits: ['update:modelValue'],
  props: {
    title: String,
    modelValue: String,
    password: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
