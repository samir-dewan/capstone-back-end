const express = require("express");
const app = express();
const PORT = 5050;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const attendeesRoute = require("./routes/attendeesRoute");
const chatroomsRoute = require("./routes/chatroomsRoute");
const commentsRoute = require("./routes/commentsRoute");
const connectionsRoute = require("./routes/connectionsRoute");
const eventsRoute = require("./routes/eventsRoute");
const peopleRoute = require("./routes/peopleRoute");

app.use("/events/:eventID", attendeesRoute);
app.use("/chat/:personID", chatroomsRoute);
app.use("/chat/:personID/:chatroomID", commentsRoute);
app.use("/connect", connectionsRoute);
// app.use("/events", eventsRoute);
app.use("/home", peopleRoute);
// app.use("/connect", peopleRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
