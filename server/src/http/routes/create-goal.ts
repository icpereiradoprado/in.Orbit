import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"; //Utilizando o `type` -> O import não conta na hora do build
import { createGoal } from "../../functions/create-goal";

export const createGoalRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/goals",
		{
			schema: {
				body: z.object({
					title: z.string(),
					desiredWeeklyFrequency: z.number().int().min(1).max(7),
				}),
			},
		},
		async (request) => {
			const { title, desiredWeeklyFrequency } = request.body;
			await createGoal({
				title,
				desiredWeeklyFrequency,
			});
		},
	);
};
