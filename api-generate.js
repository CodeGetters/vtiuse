import { generateApi } from "swagger-typescript-api";
import path from "node:path";
import process from "node:process";

generateApi({
  url: "http://localhost:3000/docs/json",
  output: path.resolve(process.cwd(), "./src/api"),
  httpClientType: "axios",
  modular: true,
  templates: path.resolve(process.cwd(), "./api-templates"),
  extractRequestParams: true,
  unwrapResponseData: false,
  hooks: {
    onCreateRoute: (routeData) => {
      routeData.request.path = `/api/back${routeData.request.path}`;
    },
  },
});
