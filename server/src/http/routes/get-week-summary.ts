import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"; //Utilizando o `type` -> O import não conta na hora do build
import { getWeekSummary } from "../../functions/get-week-summary";

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async (app) => {
	app.get("/summary", async () => {
		const { summary } = await getWeekSummary();

		return { summary };
	});
};
