const mongoose = require('mongoose');
const ticketReservationSchema = new mongoose.Schema({
    id: String,
    email: String,
    matchNumber: Number,
    category: Number,
    quantity: Number,
    price: Number,
})
const TicketReservation = mongoose.model('TicketReservation', ticketReservationSchema);
module.exports = TicketReservation;