let express = require("express");
let app = express();
app.use(express.json());
let studentTour = require("./Controller/StudentTour");
app.get("/StudentTour",studentTour.getStudentTour);
app.post("/StudentTourPost",studentTour.postStudentTour);
module.exports={app};