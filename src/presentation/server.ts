import express, { Router } from "express";

interface Options {
	port: number;
	publicPath: string;
}

export class Server {
	public readonly app = express();
	private readonly port: number;
	private readonly publicPath: string;

	constructor(options: Options) {
		const { port, publicPath } = options;
		this.port = port;
		this.publicPath = publicPath;

		this.configure();
	}

	private configure() {
		this.app.use(express.static(this.publicPath));
		this.app.use(express.json());
	}

	public setRoutes(router: Router) {
		this.app.use(router);
	}
}
