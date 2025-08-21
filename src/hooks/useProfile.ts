import { useQuery } from '@tanstack/react-query'
import { usersApi } from '../api/users'
import { queryKeys } from '../configs/queryKeys'

export function useProfileQuery(enabled: boolean) {
  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: usersApi.getProfile,
    enabled
  })
}


