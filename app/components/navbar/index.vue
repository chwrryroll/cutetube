<style lang="sass">
  @use "./style.sass";
</style>
<template>
  <nav class="navbar md:hidden">
    <ol class="container">
      <li>
        <div class="navbar__tab navbar__tab--active">
          <Icon class="tab__icon" name="solar:home-smile-angle-broken" />
          <p class="tab__title">Home</p>
        </div>
      </li>
      <li>
        <div class="navbar__tab">
          <Icon class="tab__icon" name="solar:chat-dots-broken"/>
          <p class="tab__title">Inbox</p>
        </div>
      </li>
      <li>
        <div class="navbar__tab navbar__tab--add">
          <Icon class="tab__icon" name="solar:add-circle-bold" />
        </div>
      </li>
      <li>
        <div class="navbar__tab">
          <Icon class="tab__icon" name="solar:bell-broken" />
          <p class="tab__title">Pings</p>
        </div>
      </li>
      <li>
        <div class="navbar__tab">
          <Icon class="tab__icon" name="solar:user-circle-bold" />
          <p class="tab__title">Profile</p>
        </div>
      </li>
    </ol>
  </nav>
</template>
