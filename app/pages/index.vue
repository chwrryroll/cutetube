<template>
  <Tabbar />
  <div class="relative">
    <video src="/bunny.mp4" autoplay></video>
    <div class="w-8 gap-5 mr-2 absolute right-0 top-1/2 flex flex-col">
      <div class="text-white flex flex-col items-center gap-1">
        <UIcon name="solar:heart-linear" class="size-8" />
        <p class="text-xs">2K</p>
      </div>
      <div class="text-white flex flex-col items-center gap-1">
        <UIcon name="solar:chat-round-linear" class="size-8 text-white" />
        <p class="text-xs">2K</p>
      </div>
      <div class="text-white flex flex-col items-center gap-1">
        <UIcon name="solar:plain-linear" class="size-8 text-white" />
        <p class="text-xs">2K</p>
      </div>
    </div>
  </div>
</template>
