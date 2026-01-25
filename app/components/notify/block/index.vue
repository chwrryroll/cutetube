<script setup lang="ts">
  type Action = 'like' | 'comment'
  const props = defineProps<{
    username : string,
    action   : Action
  }>();
</script>
<template>
  <div>
    <div class="notify__block flex items-center p-4 pb-2">
      <div class="size-8 rounded-full bg-red-400 relative z-20"></div>
      <p class="text-gray-600 text-sm ml-2">
        <span class="text-black mr-2">@{{props.username}}</span>
        <span v-if="props.action == 'like'">liked your post</span>
        <span v-if="props.action == 'comment'">commented</span>
      </p>
      <p class="ml-auto text-xs opacity-50">1h ago</p>
    </div>
    <div v-if="props.action == 'comment'" class="pb-2">
      <div class="bg-gray-300 rounded-xl mx-2 p-2">
        <slot/>
      </div>
    </div>
  </div>
</template>
