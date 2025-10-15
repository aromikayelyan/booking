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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Events',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'uid'
        }
    },
    created_AT: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['event_id', 'user_id'] // защита от двойного бронирования
        }
    ]
})


export default booking
