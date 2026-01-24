<style lang="scss">
@use "./style.sass";
</style>
<script setup lang="tsx">
  /** @jsxImportSource vue */
  import Video from '~/components/video/index.vue'
  import m, { motion, useScroll, useSpring, useTransform } from 'motion-v'
  import { ref, defineComponent } from 'vue'
  import { createRouter, createWebHashHistory } from 'vue-router'

  function useParallax(
    value    : m.MotionValue<number>,
    distance : number
  ) {
    return useTransform(value, [0, 1], [-distance, distance])
  }

  // TODO!
  // const router = createRouter({
  //   history: createWebHashHistory(),
  //   routes: [],
  //   scrollBehavior (to, from, savedPosition) {
  //     return desired position
  //   }
  // })

  const Scroller = defineComponent({
    props: {
      url: { type: String, required: true }
    },
    setup(props) {
      const targetRef = ref(null)
      return () => (
        <section>
          <div ref={targetRef}>
            <Video>
              <source src={props.url} type="video/mp4" />
            </Video>
          </div>
        </section>
      )
    }
  })
</script>
<template>
  <div class="w-screen flex h-lvh">
    <div class="scroller">
      <Scroller class="vcontainer" v-for="image in ['/bunny.mp4', '/bunny.mp4']" :url="image" />
    </div>
  </div>
  <Navbar/>
</template>
