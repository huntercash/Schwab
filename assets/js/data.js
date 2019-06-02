const data = d3.csv("/resources/data/2011_disaster_data.csv", function(d) {
    return {
        id: d.EVENT_ID,
        start_date : d.START_DATE,
        end_date : d.END_DATE,
        state : d.STATE,
        city : d.CZ_NAME,
        weather_event : d.EVENT_TYPE,
        property_damage : +d.DAMAGE_PROPERTY,
        crop_damage : +d.DAMAGE_CROP,
        source : d.SOURCE
    };
});
        // }).then(function(data) {
        // console.log(data);
        // });


//   CZ_NAME: "EASTERN HILLSBOROUGH"
//   DAMAGE_CROPS: "0.0"
//   DAMAGE_PROPERTY: "50000.0"
//   END_DATE: "2011-10-30"
//   EVENT_ID: "350515"
//   EVENT_TYPE: "Heavy Snow"
//   SOURCE: "Amateur Radio"
//   START_DATE: "2011-10-29"
//   STATE: "NEW HAMPSHIRE"