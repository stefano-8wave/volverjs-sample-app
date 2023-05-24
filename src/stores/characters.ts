import { useRepositoryHttp } from '@volverjs/data/vue'
import { defineStoreRepository } from '@volverjs/query-vue'
import { Character } from '~/models/Character'
import { Response } from '~/models/Response'

export const useCharactersStore = () => {
    const { repository: charactersRepository } = useRepositoryHttp<
        Character,
        Response<Character>
    >('api/character', { responseAdapter: (response) => response.results })

    return defineStoreRepository(charactersRepository, 'characters')()
}
