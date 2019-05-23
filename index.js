var ICAL = require("ical.js");
var axios = require("axios");

axios.get(`http://www.1823.gov.hk/common/ical/gc/en.ics`)
  .then(function (response) {
    parse(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })

function parse(data) {
    var vcalendar = new ICAL.Component(ICAL.parse(data));
    vcalendar.getAllSubcomponents('vevent').map(vevent => {
        var event = new ICAL.Event(vevent);
        console.log(`${event.summary}: From ${event.startDate} to ${event.endDate}`)
    });
}