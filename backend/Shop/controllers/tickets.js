import Tickets from "../models/Tickets.js";

// Create a ticket
export const addTicket = async (req, res) => {
  const newTicketAdd = new Tickets(req.body);
  try {
      const saveTicket = await newTicketAdd.save();
      res.status(200).json(saveTicket);
  } catch (error) {
    return res.status(400).json({ message: error });}};

    
// Update a ticket
export const updateTicket = async (req, res) =>{
  const updatedTicket = await Tickets.findByIdAndUpdate(req.params.id, {$set: req.body});
  try{
   res.status(200).json(updatedTicket);
  }catch (error) {
    return res.status(400).json({ message: error });}};


// Delete a ticket
export const deleteTicket = async (req, res) => {
  const { id } = req.params;
  try {
      await Tickets.findByIdAndDelete(id);
      res.status(200).json("Ticket has been deleted successfully...");
  } catch (error) {
    return res.status(400).json({ message: error });}};  


// Search ticket by id
export const searchTicket = async (req, res) => {
  const { id } = req.params;
  try {
      const ticket = await Tickets.findById(id);
      res.status(200).json(ticket);
  } catch (error) {
    return res.status(400).json({ message: error });}};


// Show all tickets
export const showTickets = async (req, res) => {
  try {
    const allTickets = await Tickets.find({$or:[{"availability.category1.available":{$gt:0}},{"availability.category2.available":{$gt:0}},{"availability.category3.available":{$gt:0}}]});
    res.status(200).json(allTickets);
    } catch (error) {
        return res.status(400).json({ message: error });}};

// Filter tickets        
  export const searchTickets = async (req, res) => {
    if(req.params.team!="All"){
    try {
      const filteredTickets = await Tickets.find({$or:[{homeTeam: req.params.team},{awayTeam: req.params.team}],$and:[{$or:[{"availability.category1.available":{$gt:0}},{"availability.category2.available":{$gt:0}},{"availability.category3.available":{$gt:0}}]}]})
      res.status(200).json(filteredTickets);
    }
    catch (error) {
      res.status(404).json({message: error.message});}}
   else{
    try {
      const allTickets = await Tickets.find({$or:[{"availability.category1.available":{$gt:0}},{"availability.category2.available":{$gt:0}},{"availability.category3.available":{$gt:0}}]});
      res.status(200).json(allTickets);
      } catch (error) {
          return res.status(400).json({ message: error });}};
   }


