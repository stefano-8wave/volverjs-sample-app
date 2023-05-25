import { RepositoryHttp } from '@volverjs/data/repository-http'
import { defineStoreRepository } from '@volverjs/query-vue'
import { Character } from '~/models/Character'
import { Response } from '~/models/Response'
import { httpClient } from '~/common/HttpClient'

const charactersRepository = new RepositoryHttp<Character, Response<Character>>(
    httpClient,
    'api/character',
    {
        responseAdapter: (response: Response<Character>) => response.results,
    },
)

export const useCharactersStore = defineStoreRepository(
    charactersRepository,
    'characters',
)
