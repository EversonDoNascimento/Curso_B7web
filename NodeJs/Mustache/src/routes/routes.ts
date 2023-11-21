import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const products = [
    {
      name: "Notebook",
      price: 2500.0,
      category: "Tecnologia",
    },
    {
      name: "Smartphone",
      price: 1200.0,
      category: "Tecnologia",
    },
    {
      name: "Livro",
      price: 35.5,
      category: "Leitura",
    },
    {
      name: "Fones de ouvido",
      price: 150.0,
      category: "Tecnologia",
    },
    {
      name: "Câmera digital",
      price: 800.0,
      category: "Fotografia",
    },
  ];
  const productsList: any = [
    "Notebook",
    "Smartphone",
    "Livro",
    "Fones de ouvido",
    "Câmera digital",
  ];
  const user = { name: "Everson", age: 50 };
  res.render("home", {
    products,
    productsList,
    showWelcome: user.age >= 50 ? true : false,
  });
});

router.get("/contact", (req: Request, res: Response) => {
  res.render("contact", {});
});

router.get("/about", (req: Request, res: Response) => {
  res.render("about", {});
});

router.get('/nome', (req:Request, res:Response)=>{

  let {name, age} = req.query;
 
  res.render("nome",{
    name,
    age
  })
})

router.get("/age",(req: Request, res: Response) => {
  const {age} = req.query;
  let birthday: number = 0;
  if(age){
    let yearBirthday: number = parseInt(age as string); 
    let currentYear: number = new Date().getFullYear();
    birthday = currentYear - yearBirthday;

  }
  res.render("age",{
    birthday
  })
})

router.post("/age",(req:Request, res:Response) => { 
  const {age} = req.body;
  let birthday: number = 0;
  if(age){
    let yearBirthday: number = parseInt(age as string); 
    let currentYear: number = new Date().getFullYear();
    birthday = currentYear - yearBirthday;

  }
  res.render("age",{
    birthday
  })
})
export default router;
