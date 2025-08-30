import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
	title: {
		default: "Next.js 15 Blog",
		template: "%s | The Blog",
	},
	description: "Blog criado usando Next.js 15",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>
				<Container>
					<Header />

					{children}

					<footer>
						<p className="text-6xl font-bold text-center py-8">Footer</p>
					</footer>
				</Container>
			</body>
		</html>
	);
}
