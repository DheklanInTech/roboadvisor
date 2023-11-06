import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'
import NavbarComponent from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RoboAdvisor',
  description: 'Risk tolerance app',
}

export default function RootLayout({ children }) {
  // const { theme } = useTheme()
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-dark-background relative`}>
        <Providers>
        <NavbarComponent/>
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  )
}
