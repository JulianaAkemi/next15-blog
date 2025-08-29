import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Next.js 15 Blog",
	description: "Blog criado usando Next.js 15",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
