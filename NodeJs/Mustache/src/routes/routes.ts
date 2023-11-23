import { Router, Request, Response } from "express";
import { home } from "../controllers/homeController";
import { contact } from "../controllers/contactController";
import { about } from "../controllers/aboutController";
import { name } from "../controllers/nameController";
import { ageGet, agePost } from "../controllers/ageController";

const router = Router();
router.get("/", home);
router.get("/contact", contact);
router.get("/about", about);
router.get("/nome", name);
router.get("/age", ageGet);
router.post("/age", agePost);

export default router;
