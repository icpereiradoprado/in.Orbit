import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"; //Utilizando o `type` -> O import não conta na hora do build
import { getWeekPendingGoals } from "../../functions/get-week-pending-goals";

export const getPedingGoalsRoute: FastifyPluginAsyncZod = async (app) => {
	app.get("/pending-goals", async () => {
		const { pendingGoals } = await getWeekPendingGoals();

		return { pendingGoals };
	});
};
