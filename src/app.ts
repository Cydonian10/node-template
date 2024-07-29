import { Server } from "@presentation/server";
import { AppRoutes } from "@presentation/routes";
import { envs } from "@config/index";

(async () => {
	await main();
})();

async function main() {
	const server = new Server({
		port: envs.PORT,
		publicPath: "public",
	});

	server.setRoutes(AppRoutes.routes);

	server.start();
}
