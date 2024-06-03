import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/header/main-header';
import Footer from '@/components/footer/footer';


export const metadata = {
	title: 'QueryTrain',
	description: '获取铁路12306的实时票务信息',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<MainHeader />
				{children}
				<Footer />
			</body>
		</html>
	);
}
