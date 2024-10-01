'use client'

import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import EnhancedLandingPageComponent from './enhanced-landing-page'
import AuthPage from './auth-page'
import PremiumPodcastAssistant from './premium-podcast-assistant'

const auth = getAuth()

export function MainComponent() {
  const [user, loading] = useAuthState(auth)
  const [showAuth, setShowAuth] = useState(false)

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    if (showAuth) {
      return <AuthPage onGoBack={() => setShowAuth(false)} />
    }
    return <EnhancedLandingPageComponent onSignInClick={() => setShowAuth(true)} />
  }

  return <PremiumPodcastAssistant />
}
