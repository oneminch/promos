import { homeHandler, promoHandler, promosHandler } from "./handlers";
import Router from "./router";

const router = new Router()

router
	.get("/", homeHandler)
	.get("/api/promo", promoHandler)
	.get("/api/promos", promosHandler)

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return router.fetch(request, env, ctx)
	},
} satisfies ExportedHandler<Env>;

