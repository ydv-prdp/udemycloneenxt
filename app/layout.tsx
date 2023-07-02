import Navbar from './(components)/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import myUser from '@/actions/getUser'
import getBasketItems from '@/actions/getBasketItems'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Education Plus',
  description: 'Learn and Earn',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const myCurrenUser = await myUser();
  const basketItems = await getBasketItems();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar myUser={myCurrenUser} basketItems={basketItems}/>
        {children}
      </body>
    </html>
  )
}
