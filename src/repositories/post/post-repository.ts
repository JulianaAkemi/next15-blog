import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
	findAllPublished(): Promise<PostModel[]>;
	findById(id: string): Promise<PostModel>;
	findBySlug(slug: string): Promise<PostModel>;
}
