import { SocketService } from "../sockets/io.service";

export class ExampleService {
	getAllExample = () => {
		SocketService.instance.io.emit("mensaje-from-server", {
			data: [{ mensaje: "hola estudipo" }],
		});
		return { message: "Hello wordl" };
	};
}
