<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    :width="opts.width"
    :height="opts.height"
    viewBox="0 0 32 32"
  >
    <path
      :fill="opts.color"
      d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM22 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM10 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM16 28c-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658s7.070-0.963 10-2.654c-0.455 5.576-4.785 9.942-10 9.942z"
    ></path>
  </svg>
</template>

<script>
import icon from '@/mixins/icon'

export default {
  mixins: [icon()],
  data () {
    return {
      defaults: {
        color: 'currentColor',
        width: 16,
        height: 16
      }
    }
  }
}
</script>
