import { exampleController } from "@src/config/index";
import { Router } from "express";

export class ExampleRoutes {
	static get routes(): Router {
		const router = Router();

		router.get("/", exampleController.getAllExample);

		return router;
	}
}
