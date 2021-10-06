<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCoreStore } from '~/stores'
import { toQuery } from '~/composables/parse'
import { launch } from '~/composables/launch'

const route = useRoute()
launch(toQuery(route.query?.q as string ?? ''), useCoreStore())
</script>
