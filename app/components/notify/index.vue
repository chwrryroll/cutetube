<style lang="sass">
@use "./style.sass"
</style>
<script setup lang="ts">
  type Action = 'like' | 'comment'
  const props = defineProps<{
    action : Action,
    stack  : number,
    focus  : boolean,
  }>();

  const focus = useState('focused-ping')
</script>
<template>
  <div :class="{ 'popup': props.focus }">
    <div class="notify">
      <div class="container">
        <div class="notify__thumbnail">
          <div class="thumbnail__badge">
            <Icon v-if="props.action == 'like'" name="solar:heart-bold" class="size-6" />
            <Icon v-if="props.action == 'comment'" name="solar:dialog-bold" class="size-6" />
          </div>
        </div>
        <div class="notify__content">
          <p class="content__title">LOOK AT THIS LITTLE BUNNY!!</p>
          <p v-if="props.action == 'like'" class="content__message">
            {{ props.stack }} hooman liked your post
          </p>
          <p v-if="props.action == 'comment'" class="content__message">
            {{ props.stack }} hooman commented
          </p>
        </div>
        <div v-show="props.focus" class="notify__toggle" @click="focus = 0">
          <Icon :name="`solar:alt-arrow-down-outline`" class="size-6" />
        </div>
      </div>
      <transition name="slide">
        <slot v-if="props.focus" />
      </transition>
    </div>
  </div>
</template>
