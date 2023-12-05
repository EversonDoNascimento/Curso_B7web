import { Request, Response } from "express";
import User from "../models/User";
import { Product } from "../models/Product";

export const home = async (req: Request, res: Response) => {
  const usuario = req.body;

  //   //Primeiro é a condição de busca no BD, depois o $set: {atributo que será atualizado}
  //   await User.updateOne(
  //     { "name.primeiroNome": "Everson" },
  //     { $set: { idade: 24 } }
  //   );

  //await findUser?.deleteOne();
  //console.log(findUser);
  //   const arrayNew = usuario.interest.split(",");
  //   await User.create({
  //     name: { primeiroNome: usuario.first, segundoNome: usuario.last },
  //     idade: parseInt(usuario.age),
  //     email: usuario.email,
  //     interesses: arrayNew,
  //   });
  //   const insertUser = new User();
  //   insertUser.name = { primeiroNome: usuario.first, segundoNome: usuario.last };

  //   insertUser.idade = parseInt(usuario.age);
  //   insertUser.email = usuario.email;
  //   const arrayNew = usuario.interest.split(",");
  //   insertUser.interesses = arrayNew;
  //   try {
  //     await insertUser.save();
  //     console.log("Salvo com sucesso!");
  //   } catch (error) {
  //     console.log(error);
  //   }

  //     //Criando novo usuário
  //   await User.create({
  //     name: {
  //       primeiroNome: "Marcia",
  //       segundoNome: "Nascimento",
  //     },
  //     idade: 45,
  //     email: "marcia@gmail.com",
  //     interesses: ["Sala de aula", "Zumba"],
  //   });
  //   //    Segunda forma
  //   let newUser = new User();
  //   newUser.name = { primeiroNome: "Everson", segundoNome: "Nascimento" };
  //   newUser.idade = 25;
  //   newUser.email = "everson@gmail.com";
  //   newUser.interesses.push("Programação","Video game");
  //   newUser.save();
  //Limitando quantidade de apresentações
  let usuarios = await User.find({
    idade: {
      $gte: 18,
    },
  });

  //console.log(usuarios);
  //   //Ordenando com o metodo sort()
  //   let usuarios = await User.find({
  //     idade: {
  //       $gt: 18,
  //     },
  //   }).sort({ "name.primeiroNome": 1 });

  //   console.log(usuarios);
  // Buscando por uma condição específica
  //let usuarios = await User.findOne({ idade: 24 });
  //console.log(usuarios);
  // Buscando por id
  //let findId = await User.findById("656db6f88e5930f42ed1ecd1");
  //console.log(findId);
  //Fazendo consulta de objeto dentro de objeto
  //   let findObject = await User.find({
  //     "name.primeiroNome": "Everson",
  //   });
  //   console.log(findObject);
  //   let usuarios = await User.find({
  //     idade: { $gt: 23 },
  //   });
  //   console.log(usuarios);
  //gt
  //gte
  //lt
  //lte
  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    usuarios,
    expensives: expensiveList,
    frasesDoDia: [],
  });
};
