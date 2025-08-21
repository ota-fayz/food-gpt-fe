import { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'
import { STORAGE_KEYS } from '../constants/storage'
import { ROUTER } from '../constants/router'

export function withGuestGate<P extends object>(Wrapped: ComponentType<P>): ComponentType<P> {
  const GuestOnly = (props: P) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) : null
    if (token) {
      return <Navigate to={ROUTER.DASHBOARD} replace />
    }
    return <Wrapped {...props} />
  }

  return GuestOnly
}


