"use client"
import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'

const NavBar = () => {
  const { data: session } = useSession()
  // const router = useRouter();

  return (
    <nav className='bg-slate-900 text-white flex place-items-center justify-between py-4 px-12'>
      <Link href={"/"}><h1>Auth Test</h1></Link>

      {session?.user?
        <div className='flex items-center gap-2'>
          <Link href={"/dashboard"}>Dashboard</Link>
          <p>{ session.user.name } { session.user.email }</p>
          { session.user.image && session.user.name &&
            <img
              className='w-10 h-10 rounded-full'
              src={ session.user.image }
              alt={ session.user.name }
            />            
          }

          <button
            className='bg-sky-300 px-4 py-2 text-slate-900 rounded' 
            onClick={ async () => {
              await signOut({ callbackUrl: "/" })
              // router.push("/")
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      : 
        <button
          className='bg-sky-300 px-4 py-2 text-slate-900 rounded' 
          onClick={() => signIn()}
        >
          Iniciar Sesión
        </button>
      }

    </nav>
  )
}

export default NavBar