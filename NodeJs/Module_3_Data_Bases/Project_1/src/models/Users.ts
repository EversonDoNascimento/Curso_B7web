import { Model, DataTypes } from "sequelize";
import { sequelize } from "./../instances/mysql";

export interface DataUserType extends Model {
  id: number;
  name: string;
  age: number;
}

export const User = sequelize.define<DataUserType>(
  "users",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      get() {
        const raw = this.getDataValue("name");
        return raw.toUpperCase();
      },
    },
    firstLetter: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue("name")[0];
      },
      //set(value) {},
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 18,
      set(value: number) {
        if (value < 18) {
          this.setDataValue("age", 18);
        } else {
          this.setDataValue("age", value);
        }
      },
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);
