export interface Env {
	promos: D1Database;
}

export interface ISimpleRequest {
	method: "GET" | "POST";
	route: string;
	callback: ICallback
}

export type ICallback = (request: Request, env: Env, ctx: ExecutionContext) => Promise<Response>
