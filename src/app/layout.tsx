import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToastifyContainer } from "@/components/ToastifyContainer";

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

					<Footer />
				</Container>

				<ToastifyContainer />
			</body>
		</html>
	);
}
