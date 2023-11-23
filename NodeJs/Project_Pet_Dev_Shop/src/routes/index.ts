import { Router } from "express";
import { home, cats, dogs, fishes } from "../controllers/homeControllers";

const router = Router();

router.get("/", home);
router.get("/cats", cats);
router.get("/dogs", dogs);
router.get("/fishes", fishes);

export default router;
