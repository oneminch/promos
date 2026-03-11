export const homeHandler = async (req: Request, env: Env, ctx: ExecutionContext) => {
	return Response.json({
		hello: 'world'
	}, {
		status: 200
	})
}

export const promoHandler = async (req: Request, env: Env, ctx: ExecutionContext) => {
	const { searchParams } = new URL(req.url)

	const promoId = searchParams.get("promo-id")

	let sqlQuery: string, promo: Record<string, unknown> | null;

	if (searchParams.size === 0 || !promoId) {
		sqlQuery = "SELECT * FROM Promos ORDER BY RANDOM() LIMIT 1";
		promo = await env.promos.prepare(sqlQuery).first()
	} else {
		sqlQuery = "SELECT * FROM Promos WHERE id = ?";
		promo = await env.promos.prepare(sqlQuery).bind(promoId).first()
	}

	return Response.json({
		promo
	}, {
		status: 200
	})
}

export const promosHandler = async (req: Request, env: Env, ctx: ExecutionContext) => {
	const sqlQuery = "SELECT * FROM Promos";
	const { results: promos } = await env.promos.prepare(sqlQuery).all();

	return Response.json({
		promos
	}, {
		status: 200
	})
}

export const defaultCatchAll = async (req: Request, env: Env, ctx: ExecutionContext) => {
	return Response.json({
		error: "No routes matched!"
	}, {
		status: 404
	})
}
