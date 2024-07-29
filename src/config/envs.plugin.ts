import "dotenv/config";
import * as env from "env-var";

export const envs = {
	PORT: env.get("PORT").required().asInt(),
	PUBLIC_PATH: env.get("PUBLIC_PATH").required().asString(),
	POSTGRES_URL: env.get("POSTGRES_URL").required().asString(),
	JWT_SEED: env.get("JWT_SEED").required().asString(),
};
