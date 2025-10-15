import sequelize from "../utils/connect.js";
import User from "./User.js";
import Event from "./Event.js";
import Booking from "./Booking.js";


Event.hasMany(Booking, { foreignKey: 'event_id', sourceKey: 'id' });
Booking.belongsTo(Event, { foreignKey: 'event_id', targetKey: 'id' });


User.hasMany(Booking, { foreignKey: 'user_id', sourceKey: 'uid' });
Booking.belongsTo(User, { foreignKey: 'user_id', targetKey: 'uid' });


async function syncDb() {
  await sequelize.sync({ alter: true });
  console.log('DB synced');
}

export { sequelize, User, Event, Booking, syncDb };
