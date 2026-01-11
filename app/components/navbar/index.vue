<template>
  <nav class="shadow-2xl px-2 py-4 flex justify-between">
    <div class="flex items-center gap-2">
      <NuxtImg src="/logo.png" alt="Logo" width="32" height="32" />
      <h1 class="text-xl">CuteTube</h1>
    </div>
    <div>
      <div class="bg-gray-100 w-92 py-2 px-4 rounded-full">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div class="size-5 bg-yellow-300 rounded-full"></div>
      <div class="size-5 bg-yellow-300 rounded-full"></div>
      <div class="size-8 bg-black rounded-full"></div>
    </div>
  </nav>
</template>
