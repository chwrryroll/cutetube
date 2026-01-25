<style lang="sass">
  @use "./style.sass"
</style>
<script setup lang="ts">
  type Action = 'like' | 'comment'
  const props = defineProps<{
    username : string,
    action   : Action
  }>();
</script>
<template>
  <div>
    <div class="notify__block">
      <div class="block__avatar"></div>
      <p class="block__content">
        <span class="text-black mr-2">@{{props.username}}</span>
        <span v-if="props.action == 'like'">liked your post</span>
        <span v-if="props.action == 'comment'">commented</span>
      </p>
      <p class="block__timestamp">1h ago</p>
    </div>
    <div v-if="props.action == 'comment'" class="pb-2">
      <div class="bg-gray-300 rounded-xl mx-2 p-2">
        <slot/>
      </div>
    </div>
  </div>
</template>
