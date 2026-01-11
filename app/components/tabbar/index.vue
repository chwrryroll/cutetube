<style lang="sass">
  @use "./style.sass";
</style>
<style >
  nav {
    bottom: 0em;
    width: 100%;
  }

  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tab > span {
    width: 24px;
    height: 24px;
  }
  .tab > * {
    color: white;
    opacity: 0.5
  }
  .tab > p {
    font-size: 10px;
  }
  .tab--active > * {
    opacity: 1;
  }

  .tab--add::after {
    width: 2.5rem;
    height: 2.5rem;
    content: "";
    position: absolute;
    border-radius: 100%;
    box-shadow: rgba(240, 46, 170, 0.4)  -1px  0px,
                rgba(240, 46, 170, 0.2)  -8px  0px,
                rgba(240, 46, 170, 0.4)   1px  0px,
                rgba(240, 46, 170, 0.2)   8px  0px;
  }

  .tab--add > span {
    width: 2.5rem;
    height: 2.5rem;
    opacity: 1;
  }
</style>
<template>
  <nav class="tabbar md:hidden">
    <ol class="container">
      <li>
        <div class="tabbar__tab tabbar__tab--active">
          <UIcon class="tab__icon" name="solar:home-smile-angle-broken" />
          <p class="tab__title">Home</p>
        </div>
      </li>
      <li>
        <div class="tabbar__tab">
          <UIcon class="tab__icon" name="solar:chat-dots-broken"/>
          <p class="tab__title">Inbox</p>
        </div>
      </li>
      <li>
        <div class="tabbar__tab tabbar__tab--add">
          <UIcon class="tab__icon" name="solar:add-circle-bold" />
        </div>
      </li>
      <li>
        <div class="tabbar__tab">
          <UIcon class="tab__icon" name="solar:bell-broken" />
          <p class="tab__title">Pings</p>
        </div>
      </li>
      <li>
        <div class="tabbar__tab">
          <UIcon class="tab__icon" name="solar:user-circle-bold" />
          <p class="tab__title">Profile</p>
        </div>
      </li>
    </ol>
  </nav>
</template>
