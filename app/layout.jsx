import NavBar from '../components/NavBar'
import { exo, orbitron } from './fonts'
import './globals.css'

export const metadata = {
    title: {
      default: 'Indie Gamer',
      template: '%s | Indie Gamer',
    },
  };
  
export default function RootLayout({children}){
return(
    <html lang="en" className={ `${orbitron.variable} ${exo.variable}`}>
        <body className="bg-orange-50 flex flex-col px-10 py-2 min-h-screen">
        <header>
        <NavBar/>
        </header>
        <main className="py-10 grow">
        {children}
        </main>
        <footer className="border-t py-3 text-slate-500 text-center text-xs">
            The images are courtesy of 
            <a className="text-orange-500 hover:underline" href='https://rawg.io/' target="_blank"> RAWG</a>
        </footer>
        </body>
    </html>
)
}