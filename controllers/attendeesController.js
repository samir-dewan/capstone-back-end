const knex = require("knex")(require("../knexfile").development);

exports.getAttendeesByEventID = async(req, res) => {
    try {
        const data = await knex("attendees")
        .select("*")
        .where({eventID: req.params.eventID});
        res.status(200).json(data);
    }
    catch{
        res.status(400).send(`Error retrieving attendee with event ID ${req.params.eventID}`)
    }
}

exports.postAttendeeToEvent = async (req, res) => {
    if (
        !req.body.eventID ||
        !req.body.personID ||
        !req.body.status
    ) {
        return res
        .status(400)
        .send(
            "Either no status, personID, or eventID has been found. Please double check data flow."
        );
    };

    try {
        const data = await knex("attendees")
        .returning(["eventID", "personID", "status"])
        .insert(req.body);
        res.status(201).json({newAttendee: data});
    }
    catch {
        res.status(401).send(`Error creating attendee.`);
    }
}

exports.deleteAttendeeToEvent = async (req, res) => {
    try {
        const data = await knex("attendees").delete().where({eventid: req.params.eventid});
        res.status(200).send(`attendee with id ${req.params.attendeeID} removed from event ${req.params.eventID}`)
    }
    catch {
        res.status(400).send(`attendee not removed from event ${req.params.eventID}`)
    }
}
