import express from "express";

const router = express.Router();
import decryptMessage from "../controllers/decryptController.js";

router.post("/", decryptMessage);

export default router;
