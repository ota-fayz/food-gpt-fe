import { useQuery } from '@tanstack/react-query'
import { usersApi } from '../../infrastructure/api/users'
import { queryKeys } from './queryKeys'

export function useProfileQuery(enabled: boolean) {
  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: usersApi.getProfile,
    enabled
  })
}


