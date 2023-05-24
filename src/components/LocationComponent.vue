<script setup lang="ts">
    import { useRepositoryHttp } from '@volverjs/data/vue'
    import { Location } from '~/models/Location'

    const props = defineProps<{
        locationUrl: string
    }>()

    const location: Ref<Location | undefined> = ref()
    const hasError = ref(false)

    const { repository: locationsRepository } =
        useRepositoryHttp<Location>('api/location/:id')

    watch(
        () => props.locationUrl,
        async (newValue) => {
            const { responsePromise } = locationsRepository.read({
                id: newValue.split('/').slice(-1)[0],
            })
            const { data, ok } = await responsePromise
            location.value = data?.[0]
            hasError.value = !ok
        },
        { immediate: true },
    )
</script>

<template>
    <div class="preflight">
        <h3>Location: {{ location?.name }}</h3>
        <h4>Dimension: {{ location?.dimension }}</h4>
        <h4>Type: {{ location?.type }}</h4>
        <h2 v-if="hasError">An error occurred</h2>
    </div>
</template>
