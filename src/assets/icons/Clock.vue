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
      d="M16 4c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zM16 29.25c-6.213 0-11.25-5.037-11.25-11.25s5.037-11.25 11.25-11.25c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25zM29.212 8.974c0.501-0.877 0.788-1.892 0.788-2.974 0-3.314-2.686-6-6-6-1.932 0-3.65 0.913-4.747 2.331 4.121 0.851 7.663 3.287 9.96 6.643v0zM12.748 2.331c-1.097-1.418-2.816-2.331-4.748-2.331-3.314 0-6 2.686-6 6 0 1.082 0.287 2.098 0.788 2.974 2.297-3.356 5.838-5.792 9.96-6.643z"
    ></path>
    <path
      :fill="opts.color"
      d="M16 18v-8h-2v10h8v-2z"></path>
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
