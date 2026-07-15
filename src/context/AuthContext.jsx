import { createContext, useState, useContext, useEffect } from 'react'
import { supabase } from '@/supabaseClient'

const AuthContext = createContext()

// depois tirar consoles
// parei em 24:10

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined)

  // Sign up function
  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      console.error('there was a problem signing up: ', error)
      return { success: false, error }
    }
    return { success: true, data }
  }

  // Sign in
  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) {
        console.error('there was an error at login: ', error)
        return { success: false, error: error }
      }

      console.log('sign-in success: ', data)
      return { success: true, data }
    } catch (error) {
      console.error('there was an error at login: ', error)
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Sign out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('there was an error: ', error)
    }
  }

  return (
    <AuthContext.Provider value={{ session, signUpNewUser, signOut, signInUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
