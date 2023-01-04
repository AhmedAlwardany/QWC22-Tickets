import mongoose from "mongoose";
const {Schema} = mongoose;

const ticketSchema = new Schema({
    matchNumber: Number,
    roundNumber: Number,
    dateUtc: String,
    location: String,
    availability:{
     category1:{
        available:Number,
        pending:Number,
        price:Number
     },
     category2:{
        available:Number,
        pending:Number,
        price:Number
     },
     category3:{
        available:Number,
        pending:Number,
        price:Number
     }
    },
    homeTeam: String,
    awayTeam: String,
    group: String,
});

const Tickets = mongoose.model('Tickets',ticketSchema );
export default Tickets;