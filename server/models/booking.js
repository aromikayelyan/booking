import Sequelize from "sequelize"
import sequelize from "../utils/connect.js"

const booking = sequelize.define('Booking', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Event',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    user_id:{
        type: Sequelize.STRING,
        allowNull: false
    },
    created_AT: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
},{
  timestamps: false
})


export default booking
