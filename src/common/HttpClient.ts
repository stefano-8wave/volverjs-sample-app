import { createHttpClient } from '@volverjs/data/vue'

export const httpClient = createHttpClient({
    prefixUrl: 'https://rickandmortyapi.com',
})
