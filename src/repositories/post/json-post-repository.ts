import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, "db", "seed", "posts.json"); //OS agnostic

export class JsonPostRepository implements PostRepository {
	private async readFromDisk(): Promise<PostModel[]> {
		const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
		const parsedJson = JSON.parse(jsonContent);
		const { posts } = parsedJson;
		return posts;
	}

	async findAll(): Promise<PostModel[]> {
		const posts = await this.readFromDisk();
		return posts;
	}

	async finById(id: string): Promise<PostModel> {
		const posts = await this.readFromDisk();
		const post = posts.find((post) => post.id === id);

		if (!post) {
			throw new Error("Post not found");
		}

		return post;
	}
}
