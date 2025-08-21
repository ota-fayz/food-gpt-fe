import { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'
import { STORAGE_KEYS } from '../constants/storage'
import { ROUTER } from '../constants/router'
import { useProfileQuery } from '../application/queries/useProfile'

export function withAuthGate<P extends object>(Wrapped: ComponentType<P>): ComponentType<P> {
  const Guarded = (props: P) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) : null
    const { data, isLoading, isError } = useProfileQuery(Boolean(token))

    if (!token) {
      return <Navigate to={ROUTER.WELCOME} replace />
    }

    if (isLoading) {
      return null
    }

    if (isError) {
      return <Navigate to={ROUTER.WELCOME} replace />
    }

    if (data) {
      return <Wrapped {...props} />
    }

    return null
  }

  return Guarded
}


