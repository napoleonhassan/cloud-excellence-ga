<template>
  <div class="field-wrapper">
    <span>{{ title }}</span>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'FormTextArea',
  emits: ['update:modelValue'],
  props: {
    title: String,
    modelValue: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
