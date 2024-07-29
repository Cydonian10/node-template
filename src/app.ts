import { Server } from "@presentation/server";
import { AppRoutes } from "@presentation/routes";
import { envs } from "@config/index";
import { createServer } from "http";
import { SocketService } from "./presentation/sockets/io.service";

(async () => {
	await main();
})();

async function main() {
	const server = new Server({
		port: envs.PORT,
		publicPath: "public",
	});

	const httpServer = createServer(server.app);
	SocketService.initWss({ server: httpServer });
	server.setRoutes(AppRoutes.routes);

	httpServer.listen(envs.PORT, () => {
		console.log(`Server running on port: ${envs.PORT}`);
	});
}
