<style lang="scss">
  @use "./style.sass";
</style>
<script setup lang="ts">
  const likes = useState("likes", () => Math.round(Math.random() * 1000))
</script>
<template>
  <div class="video">
    <div class="container">
      <video class="video__player" autoplay loop @dblclick="likes++">
        <slot />
      </video>
      <div class="video__reactions">
        <button class="reactions__button" @click="likes++">
          <Icon class="button__icon" name="solar:heart-linear"/>
          <p class="button__label">{{likes}}</p>
        </button>
        <button class="reactions__button">
          <Icon class="button__icon" name="solar:chat-round-linear"/>
          <p class="button__label">2K</p>
        </button>
        <button class="reactions__button">
          <Icon class="button__icon" name="solar:plain-linear"/>
          <p class="button__label">2K</p>
        </button>
      </div>
    </div>
  </div>
</template>
