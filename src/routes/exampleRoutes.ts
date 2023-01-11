import { Router } from "express";
import { getExamples, getExampleData } from "../controllers/exampleControllers";
import { getExampleDataValidations } from "../validation/exampleValidation/exampleValidation";

const router = Router();

router.get("/", getExamples);
router.post("/", getExampleDataValidations, getExampleData);

export default router;
