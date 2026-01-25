<template>
  <transition-group class="notifys" name="list" tag="ul">
    <Notify v-for="item in items" :stack="14" action="comment" :id="item.id" :key="item.id" :focus="focus == item.id"
      @touchstart="startPress(item.id)"
      @touchend="endPress(item.id)"
      @mousedown="startPress(item.id)"
      @mouseup="endPress(item.id)"
    >
      <NotifyBlock username="underfrans" action="comment">
        Wow so cute!
      </NotifyBlock>
    </Notify>
  </transition-group>
</template>

<script setup lang="ts">
  const focus = useState('focused-ping', () => 0)

  const { startPress, endPress } = useHoldPress((id: number) => {
    // Check if vibration API is supported
    if (typeof navigator.vibrate === "function")
      navigator.vibrate(500)
    focus.value = id
    const el = document.getElementById(id.toString())
    setTimeout(() => {
      el?.scrollIntoView({ block: "start", behavior: 'smooth' })
    }, 550)
  }, 400)

  const items = ref([
    { id: 2, post: 'bunny', action: 'comment' },
    { id: 3, post: 'bunny', action: 'comment' },
    { id: 4, post: 'bunny', action: 'comment' },
  ])
  setTimeout(() => {
    items.value = [
      { id: 1, post: 'bunny', action: 'like' },
      ...items.value
    ]
  }, 1500)
</script>

<style scoped>
.notifys:has(.popup) > *:not(.popup) {
  filter: blur(8px);
  transition: all 0.5s;
}

.list-move {
  transition: transform 0.6s;
}

.list-enter-active, .list-leave-active {
  transition: opacity 1s ease;
}

.list-enter, .list-leave-to {
  opacity: 0;
}
</style>
