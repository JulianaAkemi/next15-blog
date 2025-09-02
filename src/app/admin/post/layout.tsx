import { AdminMenu } from "../AdminMenu";

type AdminPostLayoutProps = {
	children: React.ReactNode;
};

export default function AdminPostLayout({
	children,
}: Readonly<AdminPostLayoutProps>) {
	return (
		<>
			<AdminMenu />
			{children}
		</>
	);
}
