import { Server as ServerHttp } from "http";
import { Server } from "socket.io";

interface Options {
	server: ServerHttp;
	path?: string; // ws
}

export class SocketService {
	// public readonly io:
	private static _instance: SocketService;
	public io: Server;

	constructor(options: Options) {
		const { server, path = "/ws" } = options;
		this.io = new Server(server);
		this.start();
	}

	static get instance(): SocketService {
		if (!SocketService._instance) {
			throw "WssService is not initialized";
		}
		return SocketService._instance;
	}

	static initWss(options: Options) {
		SocketService._instance = new SocketService(options);
	}

	public sendMessage(type: string, payload: Object) {
		this.io.on("connection", (socket) => {
			//Escuchar evento: mensaje-to-server
			socket.on("mensaje-to-server", (payload) => {
				this.io.emit("mensaje-from-server", payload);
			});
		});
	}

	public start() {
		this.io.on("connection", (socket) => {
			console.log("Conectado");
			//Escuchar evento: mensaje-to-server
			socket.on("mensaje-to-server", (data) => {
				console.log(data);
				this.io.emit("mensaje-from-server", data);
			});
		});
	}
}
