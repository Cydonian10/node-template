import { ExampleController } from "@src/presentation/example/example.controller";
import { ExampleService } from "@src/presentation/example/example.service";
import * as awilix from "awilix";

export const container = awilix.createContainer();

container.register({
	exampleController: awilix.asClass(ExampleController).transient(),
	exampleService: awilix.asClass(ExampleService).transient(),
});

export const exampleController = container.resolve<ExampleController>("exampleController");
