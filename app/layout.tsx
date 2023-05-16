import './globals.css'
import Footer from './layout/footer/footer'
import Header from './layout/header/header'

export const metadata = {
  title: 'Brandholder | Home',
  description: 'Store Website',
}

export default function RootLayout({ children, title, description }: {
  children: React.ReactNode,
  title?: string,
  description?: string
}) {
  return (
    <html lang="en">

      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
        </style>
        
        {title && (<title>{title}</title>)}
        {description && (<meta name="description" content={description}/>)}
      </head>

      <body>

        <Header />

        <main>{children}</main>

        <Footer />

      </body>

    </html>
  )
}
