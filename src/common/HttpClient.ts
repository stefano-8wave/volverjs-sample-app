import { createHttpClient } from '@volverjs/data/vue'

export const httpClientPlugin = createHttpClient({
    prefixUrl: 'https://rickandmortyapi.com',
})
