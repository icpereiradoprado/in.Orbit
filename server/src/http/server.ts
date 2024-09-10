import fastify from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "./routes/create-goal";
import { createCompletionRoute } from "./routes/create-completion";
import { getPedingGoalsRoute } from "./routes/get-pending-goals";
import { getWeekSummaryRoute } from "./routes/get-week-summary";

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

//`register` serve para registrar um plugin
app.register(getPedingGoalsRoute);

app.register(getWeekSummaryRoute);

app.register(createGoalRoute);

app.register(createCompletionRoute);

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server running!");
	});
