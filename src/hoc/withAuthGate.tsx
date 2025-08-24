import { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'
import { STORAGE_KEYS } from '../constants/storage'
import { ROUTER } from '../constants/router'
import { useProfileQuery } from '../hooks/useProfile'
import { useTelegramAuth } from '../hooks/useTelegramAuth'

export function withAuthGate<P extends object>(Wrapped: ComponentType<P>): ComponentType<P> {
  const Guarded = (props: P) => {
    const { isAuthenticated, isLoading: isAuthLoading, error } = useTelegramAuth()
    const token = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) : null
    
    // Use React Query for profile data
    const { data: profile, isLoading: isProfileLoading, isError: isProfileError } = useProfileQuery(Boolean(token));

    console.log('🔐 AuthGate status:', { 
      isAuthenticated, 
      isAuthLoading, 
      error, 
      hasToken: !!token,
      isProfileLoading,
      isProfileError 
    })

    // Show loading while Telegram auth is in progress
    if (isAuthLoading) {
      console.log('⏳ AuthGate: Waiting for Telegram authentication...')
      return null
    }

    // If not authenticated and no token, redirect to welcome
    if (!isAuthenticated && !token) {
      console.log('🚫 AuthGate: Not authenticated, redirecting to welcome')
      return <Navigate to={ROUTER.WELCOME} replace />
    }

    // Show loading while profile is loading
    if (isProfileLoading) {
      console.log('⏳ AuthGate: Loading user profile...')
      return null
    }

    // If profile query failed, redirect to welcome
    if (isProfileError) {
      console.log('❌ AuthGate: Profile query failed, redirecting to welcome')
      return <Navigate to={ROUTER.WELCOME} replace />
    }

    // If we have profile data, render the component
    if (profile) {
      console.log('✅ AuthGate: User authenticated and profile loaded')
      return <Wrapped {...props} />
    }

    console.log('⏳ AuthGate: Waiting for profile data...')
    return null
  }

  return Guarded
}


