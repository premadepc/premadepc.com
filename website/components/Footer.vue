<template>
  <footer class="bg-white w-full py-4 text-center">
    <div class="flex justify-center space-x-4">
      <a href="https://www.facebook.com/people/Premade-PCs/61564155444085/" target="_blank" class="text-blue-500">
        <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
      </a>
      <a href="https://twitter.com/PremadePC" target="_blank" class="text-blue-500">
        <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
      </a>
      <a href="https://instagram.com/premadepc" target="_blank" class="text-blue-500">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
      </a>
      <a href="https://linkedin.com/company/premadepc" target="_blank" class="text-blue-500">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
      </a>
      <a href="https://youtube.com/@PremadePC" target="_blank" class="text-blue-500">
        <font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

// Add the icons to the library
library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube)
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
