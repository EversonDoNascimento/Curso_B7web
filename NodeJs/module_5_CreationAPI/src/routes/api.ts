import { Router } from "express";
import { apiController } from "../controllers/apiController";

const router = Router();

router.post("/phrase", apiController.createPhrase);
router.get("/phrases", apiController.phrases);
router.get("/random", apiController.random);
router.post("/phrase/delete", apiController.deletePhrase);
router.put("/phrase", apiController.updatePhrase);
export default router;
