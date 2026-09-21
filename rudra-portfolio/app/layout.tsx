import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title:'Rudra Prajapati — Data Analyst', description:'Premium data analyst portfolio for Rudra Prajapati.' }
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="en" suppressHydrationWarning><body>{children}</body></html> }
