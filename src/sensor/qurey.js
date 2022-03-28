
// const getSensorData = "select devicename,username,max(datetime) as sensortime from sensordata
// group by username,devicename";

const getDataforSensor = 'select * from public."vwGetAllLatestSensorData"';
const getAllSensorData = "select * from sensordata order by datetime desc;";
const addSensorData = "insert into sensordata (username,email_id,devicename,temperature,humidity,datetime) values ($1,$2,$3,$4,$5,$6);";


module.exports = {
    getAllSensorData,
    getDataforSensor,
    addSensorData
 };