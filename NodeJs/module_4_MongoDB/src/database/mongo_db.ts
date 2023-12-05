import { connect } from "mongoose";
import dotenv from "dotenv";
//dotenv para utilizar as variáveis de ambiente
dotenv.config();
export const mongoConnect = async () => {
  try {
    console.log("Conectando ao MongoDB");
    //Processo de conexão com o banco de dados Mongo
    //No connect você irá passar a Url do banco
    await connect(process.env.MONGO_URL as string);
    console.log("Conexão bem sucedida");
  } catch (error) {
    console.log("Error of connection: ", error);
  }
};
