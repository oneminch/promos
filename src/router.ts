import { errorHandler } from "./handlers";
import { ICallback, ISimpleRequest } from "./types";

export default class Router {
	routes: ISimpleRequest[];

	constructor() {
		this.routes = []

		this.addCatchAllRoute()
	}

	public get(route: string, callback: ICallback) {
		this.routes.push({
			method: "GET",
			route,
			callback
		})

		return this
	}

	public post(route: string, callback: ICallback) {
		this.routes.push({
			method: "POST",
			route,
			callback
		})

		return this
	}

	public fetch(request: Request, env: Env, ctx: ExecutionContext): ReturnType<ICallback> {
		const { pathname: requestPathname } = new URL(request.url)

		const endpoint = this.routes.find((e) => (
			e.method === request.method && e.route === requestPathname)
		)

		const catchAllEndpoint = this.routes.find((e) => (e.route === "*"))

		if (!endpoint) {
			return catchAllEndpoint!.callback(request, env, ctx)
		}

		return endpoint.callback(request, env, ctx)
	}

	public addCatchAllRoute(callback: ICallback = errorHandler) {
		this.routes.push({
			method: "GET",
			route: "*",
			callback
		})

		return this
	}
}
