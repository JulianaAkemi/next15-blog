"use server";

import { SIMULATE_WAIT_IN_MS } from "@/lib/constants";
import { asyncDelay } from "@/utils/async-delay";

export async function deletePostAction(id: string) {
	await asyncDelay(SIMULATE_WAIT_IN_MS, true);

	return id;
}
