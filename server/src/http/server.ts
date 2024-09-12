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
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();

//registra o plugin de CORS
app.register(fastifyCors, {
	origin: "*", //Como é um treinamento, ele permite qualquer domínio, porém em PRD, adicionar uma URL específica
});

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
