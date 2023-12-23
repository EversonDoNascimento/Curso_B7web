import { Model, DataTypes } from "sequelize";
import { sequelize } from "./../instances/mysql";

interface PhrasesType extends Model {
  id: number;
  author: string;
  phrase: string;
}

export const Phrase = sequelize.define<PhrasesType>(
  "phrases",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },

    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phrase: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "phrases", timestamps: false }
);
