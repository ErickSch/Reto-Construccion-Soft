import { Router } from "express";
import {
    getItem, 
    getItems, 
    postItem, 
    putItems, 
    deleteItems,
    // getInfoEmpleados,

    getPeople,
    postPeople
} from "./items.controllers.js";




const router = Router();

router.get("/getitems", getItems);
router.get("/items/:id", getItem);
router.post("/postitem", postItem);
router.put("/items/:id", putItems);
router.delete("/items/:id", deleteItems);

// router.get("/getinfoempleados", getInfoEmpleados);

router.get("/getpeople", getPeople);
router.post("/postpeople", postPeople);


export default router;