var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(mongoose);
mongoose.connect('mongodb://localhost/buskerv1');

var ArtistSchema = new mongoose.Schema({
    name: String,
    age: Number,
    genre: String,
    location: String
})

var Artist = mongoose.model("artist",ArtistSchema);

const port = process.env.NODE_ENV.port || 3000;

app.listen(port);


export const CreateArtist = async (id) =>{
const artisT = express.post('/artist',id);
var singer = new Artist({
    name: 'name',
    age: 12
})
await singer.save();
return {
    type:"CREATE_ARTIST",
    payload:{artisT}
}
}

export const listOfItems = ()=>{
    return{
        type:"LIST_ITEMS",
    }
}