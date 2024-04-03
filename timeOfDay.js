const getTimeOfDay = time => {
    if (time >= 4 && time < 12) {
        return "Morning";
    } else if (time >= 12 && time < 17) {
        return "Afternoon";
    } else {
        return "Evening";
    }
};

const isMorning = time => time >= 4 && time < 12; //check for morning
const isAfternoon = time => time >= 12 && time < 17; //check for afternoon
const isEvening = time => time >= 17 || time < 4; // check for evening

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening };// export the functions in the module