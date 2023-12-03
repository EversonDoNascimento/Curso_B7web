import { Request, Response } from "express";
import { User } from "../models/Users";
import { Product } from "../models/Product";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response) => {
  const [usuario, create] = await User.findOrCreate({
    where: { name: "Everson Nascimento" },
    defaults: { age: 24 },
  });
  console.log("USUARIO" + usuario);
  console.log("CREATE" + create);

  // const user_find = await User.findOne({ where: { name: "Edilson" } });
  // if (user_find) {
  //   console.log(user_find);
  // } else {
  //   console.log("User not found!");
  // }
  // const value_id = req.body;
  // //console.log(Object.keys(value_id));
  // switch (Object.keys(value_id)[0]) {
  //   case "sum_id":
  //     console.log("Somando");
  //     let results = await User.findAll({ where: { id: value_id.sum_id } });
  //     let user = results[0];
  //     user.age++;
  //     await user.save();
  //     break;
  //   case "sub_id":
  //     console.log("Subtraindo");
  //     let results_sub = await User.findAll({ where: { id: value_id.sub_id } });
  //     let user_sub = results_sub[0];
  //     user_sub.age--;
  //     await user_sub.save();
  //     break;
  //   case "exc_id":
  //     console.log("Excluindo");
  //     let results_exc = await User.findAll({ where: { id: value_id.exc_id } });
  //     let user_exc = results_exc[0];
  //     await user_exc.destroy();
  //     break;
  //   default:
  //     break;
  // }
  // let results = await User.findAll({ where: { id: 6 } });
  // if (results.length > 0) {
  //   let user = results[0];
  //   await user.destroy();
  // }

  // //Deletando users
  // await User.destroy({
  //   where: {
  //     age: { [Op.lte]: 29 },
  //   },
  // });

  // // Forma de atualizar um dado
  // let results = await User.findAll({ where: { id: 7 } });
  // if (results.length > 0) {
  //   let user = results[0];
  //   user.name = "José Edilson";
  //   user.age = 52;
  //   await user.save();
  // }

  // //await User.update({ age: 18 }, { where: { age: { [Op.lte]: 30 } } });
  // await User.update(
  //   { age: 29 },
  //   { where: { name: { [Op.like]: "%Everton%" } } }
  // );
  //Recebendo user do post e cadastrando no BD
  // let { name, idade } = req.body;
  // console.log(name + " " + idade);

  // if (name !== "" && idade !== "") {
  //   const newUser = await User.create({
  //     name: name,
  //     age: idade,
  //   });
  //   name = "";
  //   idade = "";
  // }

  //Build + save
  // const users = User.build({
  //   name: "Fulano",
  //   age: 42,
  // });
  // await users.save();
  //Create
  // const users = await User.create({
  //   name: "Cliclano",
  //   age: 74,
  // });
  const users = await User.findAll();
  // const users = await User.findAll({ attributes: ["name", "age"] });
  //const users = await User.findAll({
  //  attributes: ["name", "age"],
  //  where: { name: "Edilson" },
  //});
  //const users = await User.findAll({
  //  where: {
  //    [Op.or]: [{ age: 18 }, { name: "Everson" }],
  //  },
  //});
  // console.log(JSON.stringify(users));
  // let users = await User.findAll({
  //   where: {
  //     age: {
  //       [Op.gt]: 40, // > 40
  //       [Op.gte]: 40, // >= 40
  //       [Op.lt]: 40, // < 40
  //       [Op.lte]: 40, // <= 40
  //     },
  //   },
  // });
  // let users = await User.findAll({
  //   where: {
  //     age: { [Op.gte]: 18 },
  //     // name: {
  //     //   [Op.like]: "Edi%",
  //     // },
  //     // age: {
  //     //   //[Op.gte]: 40, // > 40
  //     //   //[Op.between]: [25, 70],
  //     //   //[Op.in]: [30, 55],
  //     //   //[Op.notIn]: [30, 55]
  //     // },
  //   },
  //   // order: [
  //   //   ["age", "DESC"],
  //   //   ["name", "DESC"],
  //   // ],
  //   // offset: 2,
  //   // limit: 2,
  // });

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
    users,
    expensives: expensiveList,
    frasesDoDia: [],
  });
};
