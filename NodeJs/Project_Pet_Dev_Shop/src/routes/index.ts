import { Router } from "express";
import { home, cats, dogs, fishes } from "../controllers/homeControllers";
import { search } from "../controllers/searchController";

const router = Router();

router.get("/", home);
router.get("/cats", cats);
router.get("/dogs", dogs);
router.get("/fishes", fishes);
router.get("/search", search);

export default router;
