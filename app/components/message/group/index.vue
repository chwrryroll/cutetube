<script setup lang="ts">
  const props = defineProps<{
    author: string
  }>()
</script>
<template>
  <div class="mt-4 flex flex-col gap-[1px]"
    :class="{'items-end': props.author == 'charity'}"
  >
    <slot/>
  </div>
</template>
