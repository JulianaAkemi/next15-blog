"use client";

import { logoutAction } from "@/actions/login/logout-action";
import { Button } from "@/components/Button";
import clsx from "clsx";
import {
	CircleXIcon,
	FileTextIcon,
	HourglassIcon,
	HouseIcon,
	LogOutIcon,
	MenuIcon,
	PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function AdminMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();

	const navClasses = clsx(
		"bg-slate-900 text-slate-100 rounded-lg",
		"flex flex-col  mb-8",
		"sm:flex-row sm:flex-wrap",
		!isOpen && "h-10",
		!isOpen && "overflow-hidden",
		"sm:overflow-visible sm:h-auto"
	);

	const linkClasses = clsx(
		"[&>svg]:w-[16px] [&>svg]:h-[16px] px-4",
		"flex items-center justify-start gap-2 cursor-pointer",
		"transition hover:bg-slate-800 rounded-lg",
		"h-10",
		"shrink-0"
	);

	const openCloseBtnClasses = clsx(
		linkClasses,
		"text-blue-200 italic",
		"sm:hidden"
	);

	function handleLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		e.preventDefault();

		startTransition(async () => {
			await logoutAction();
		});
	}

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<nav className={navClasses}>
			<Button
				onClick={() => setIsOpen((s) => !s)}
				className={openCloseBtnClasses}
			>
				{!isOpen && (
					<>
						<MenuIcon />
						Menu
					</>
				)}

				{isOpen && (
					<>
						<CircleXIcon />
						Fechar
					</>
				)}
			</Button>

			<a className={linkClasses} href="/" target="_blank">
				<HouseIcon />
				Home
			</a>

			<Link className={linkClasses} href="/admin/post">
				<FileTextIcon />
				Posts
			</Link>

			<Link className={linkClasses} href="/admin/post/new">
				<PlusIcon />
				Criar post
			</Link>

			<a onClick={handleLogout} href="#" className={linkClasses}>
				{isPending && (
					<>
						<HourglassIcon />
						Aguarde...
					</>
				)}

				{!isPending && (
					<>
						<LogOutIcon />
						Sair
					</>
				)}
			</a>
		</nav>
	);
}
