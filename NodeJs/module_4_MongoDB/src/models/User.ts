//import { Model, Schema, connetion } from "mongoose";
//Importando o mongoose
import mongoose from "mongoose";

// Criando o type para o model
type UserType = {
  name: { primeiroNome: string; segundoNome: string };
  idade: number;
  email: string;
  interesses: [string];
};

//Criando o screma
const scremas = new mongoose.Schema<UserType>({
  email: { type: String, required: true },
  idade: { type: Number, required: true },
  interesses: [String],
  name: {
    primeiroNome: { type: String, required: true },
    segundoNome: String,
  },
});

//Criando o model de fato
const User = mongoose.model("user", scremas);

export default User;

// email: { type: String, required: true },
// idade: { type: Number, required: true },
// interesses: [String],
// name: {
//   primeiroNome: { type: String, required: true },
//   segundoNome: String}
