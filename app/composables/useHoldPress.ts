export function useHoldPress(onHold: Function, duration: number) {
  if (navigator?.vibrate) {
    navigator.vibrate(500);
  }

  const pressDuration = ref(0)
  const isPressing = ref(false)
  let pressTimer: number;

  const startPress = (id: number) => {
    isPressing.value = true
    pressDuration.value = 0
    pressTimer = setInterval(() => {
      pressDuration.value += 100
    }, 100)
  }

  const endPress = (id: number) => {
    if (isPressing.value) {
      clearInterval(pressTimer)
      pressTimer = 0
      isPressing.value = false
      if (pressDuration.value >= duration) {
        onHold(id)
      }
    }
  }

  onUnmounted(() => {
    if (pressTimer) clearInterval(pressTimer)
  })
  return { startPress, endPress }
}
