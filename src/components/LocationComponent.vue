<script setup lang="ts">
    import { useRepositoryHttp } from '@volverjs/data/vue'
    import { Location } from '~/models/Location'

    const props = defineProps<{
        characterId: number
    }>()

    const { repository: locationsRepository } =
        useRepositoryHttp<Location>('api/location/:id')

    const { responsePromise } = locationsRepository.read({
        id: props.characterId,
    })
    const { data, ok, abortReason } = await responsePromise

    const location = computed(() => data?.[0])
</script>

<template>
    <div class="preflight">
        <h3>Location: {{ location?.name }}</h3>
        <h4>Dimension: {{ location?.dimension }}</h4>
        <h4>Type: {{ location?.type }}</h4>
        <h2 v-if="!ok">An error occurred for: {{ abortReason }}</h2>
    </div>
</template>
