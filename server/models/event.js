import Sequelize from "sequelize"
import sequelize from "../utils/connect.js"

const event = sequelize.define('Event', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    total_seats:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


export default event




// - id (SERIAL PRIMARY KEY)
// - name (VARCHAR)
// - total_seats (INT)
