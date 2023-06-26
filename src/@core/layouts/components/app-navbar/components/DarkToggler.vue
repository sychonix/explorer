<template>
  <b-nav-item @click="toggleDarkMode" :disabled="isDark">
    <feather-icon size="21" :icon="`${isDark ? 'Sun' : 'Moon'}Icon`" />
  </b-nav-item>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'
import { computed } from '@vue/composition-api'
import { BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNavItem,
  },
  setup() {
    const { skin } = useAppConfig()

    const isDark = computed(() => skin.value === 'dark')

    const toggleDarkMode = () => {
      if (!isDark.value) {
        useAppConfig().setSkin('dark')
      }
    }

    return { isDark, toggleDarkMode }
  },
}
</script>
