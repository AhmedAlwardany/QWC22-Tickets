import express from "express";
import { showTickets, searchTickets, addTicket, searchTicket, updateTicket, deleteTicket} from "../controllers/tickets.js";
const router = express.Router()

router.post("/", addTicket); // Add a ticket
router.delete("/:id", deleteTicket); // Delete a ticket by id
router.get("/:id", searchTicket); // Search for a ticket by id
router.put("/:id", updateTicket); // Delete a ticket by id
router.get("/", showTickets); // Show all tickets
router.get("/teams/:team", searchTickets); // Search for tickets by team

export default router