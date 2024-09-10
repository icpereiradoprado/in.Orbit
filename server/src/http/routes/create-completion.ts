import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"; //Utilizando o `type` -> O import não conta na hora do build
import { createGoalCompletion } from "../../functions/create-goal-completion";

export const createCompletionRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/completions",
		{
			schema: {
				body: z.object({
					goalId: z.string(),
				}),
			},
		},
		async (request) => {
			const { goalId } = request.body;
			await createGoalCompletion({
				goalId,
			});
		},
	);
};
