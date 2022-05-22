// @ts-check
import { Router } from "express";
import { homeRoute } from "#server/routes/api/index";
// import { homeRoute } from "./index.mjs";

const apiRouter = Router();

// /api/
homeRoute(apiRouter);

export { apiRouter };
