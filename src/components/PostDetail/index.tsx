import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import clsx from "clsx";

type SinglePostProps = {
	slug: string;
};

export async function PostDetail({ slug }: SinglePostProps) {
	const post = await findPostBySlugCached(slug);

	return (
		<article className="mb-16">
			<header className="group flex flex-col gap-4 mb-4">
				<PostHeading as="h2" url={`/post/${post.slug}`}>
					{post.title}
				</PostHeading>

				<p>
					{post.author} | <PostDate dateTime={post.createdAt} />
				</p>

				<Image
					src={post.coverImageUrl}
					alt={post.title}
					width={1200}
					height={720}
				/>
			</header>

			<div
				className={clsx(
					"prose prose-slate",
					"w-full max-w-none",
					"overflow-hidden",
					"prose-a:transition",
					"prose-a:no-underline",
					"prose-a:text-blue-500",
					"prose-a:hover:text-blue-700",
					"prose-a:hover:underline",
					"prose-img:mx-auto",
					"lg:prose-lg"
				)}
			>
				<ReactMarkdown
					rehypePlugins={[rehypeSanitize]}
					remarkPlugins={[remarkGfm]}
					components={{
						table: ({ node, ...props }) => {
							if (!node?.children) return "";

							return (
								<div className="overflow-x-auto">
									<table className="w-full min-w-[600px]" {...props} />
								</div>
							);
						},
					}}
				>
					{post.content}
				</ReactMarkdown>
			</div>
		</article>
	);
}
