<template>
  <b-nav-item @click="toggleDarkMode" v-if="!isDark">
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
      useAppConfig().setSkin('dark')
    }

    return { isDark, toggleDarkMode }
  },
}
</script>
