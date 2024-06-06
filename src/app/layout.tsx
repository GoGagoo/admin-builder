import { Inter as FontSans } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-sans',
})

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<head />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased dark',
					fontSans.variable
				)}
			>
				{children}
			</body>
		</html>
	)
}
