import { Router } from "express";
import {
    getPeople,
    postPeople,
    deletePeople,
    updatePeople,
    getOnePeople
} from "./items.controllers.js";

const router = Router();

router.get("/getpeople", getPeople);
router.get("/getpeople/:id", getOnePeople);
router.post("/postpeople", postPeople);
router.delete("/deletepeople/:id", deletePeople);
router.put("/updatepeople/:id", updatePeople);


export default router;