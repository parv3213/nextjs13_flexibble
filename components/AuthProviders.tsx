'use client'

import { getProviders, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'

type Provider = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
  signinUrlParams?: Record<string, string> | undefined
}

type Providers = Record<string, Provider>

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null)

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }

    fetchProviders()
  }, [])

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider, index) => (
          <button key={index} onClick={() => signIn(provider.id)}>
            {provider.id}
          </button>
        ))}
      </div>
    )
  }
  return <div>AuthProviders</div>
}
export default AuthProviders
