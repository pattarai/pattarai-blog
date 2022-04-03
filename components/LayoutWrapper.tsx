import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import PattaraiLogo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import Image from 'next/image'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <div className="flex items-center justify-between">
              <div className="mr-5 mt-1">
                <Link href="https://www.pattarai.in/" aria-label="Pattarai Website">
                  <Image src="/static/images/licet.png" alt="Licet Logo" height={76} width={76} />
                </Link>
              </div>
              <div className="mr-5">
                <Link href="https://www.pattarai.in/" aria-label="Pattarai Website">
                  <PattaraiLogo width="auto" height="70px" />
                </Link>
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <Link href="/" aria-label="Pattarai Blog">
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                </Link>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
