import { NavLinks } from '@/constants'
import { getCurrentUser } from '@/lib/session'
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders'

interface Props {}
const Navbar = async (props: Props) => {
  const session = await getCurrentUser()

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src={'/logo.svg'} alt="Flexibble" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link key={link.key} href={link.href}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex-center gap-4">
        {session?.user ? (
          <>
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}
export default Navbar
