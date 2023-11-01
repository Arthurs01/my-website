/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import './globals.css'
import Navigation2 from 'website/components/navigation2'
import { Roboto } from '@next/font/google';
import Navigation from 'website/components/navigation';
import BootstrapCode from './bootstrapCode'



export const metadata = {
  title: 'Portfolio Arturo López',
  description: 'Portfolio generated by Arturo López',
}

const roboto = Roboto({
  subsets:['latin'],
  weight:['400','700'],
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Arturo López Portafolio</title>
      </head>
      <body>
        <main className={roboto.className}>
          <Navigation />
        <Navigation2 />
        {children}
        </main>
        <BootstrapCode />
      </body>
    </html>
  )
}
