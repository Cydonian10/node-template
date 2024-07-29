import { Request, Response } from "express";
import { ExampleService } from "./example.service";

export class ExampleController {
	private exampleSrv: ExampleService;

	constructor({ exampleService }: { exampleService: ExampleService }) {
		this.exampleSrv = exampleService;
	}

	getAllExample = (_req: Request, res: Response) => {
		const message = this.exampleSrv.getAllExample();
		return res.json(message);
	};
}
