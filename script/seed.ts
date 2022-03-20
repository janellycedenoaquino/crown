import { db, User, Product, Order, ProductOrder } from "../src/db/index";
import { encryptPassword } from "../src/db/models/User"


const seed = async () => {
  await db.sync({ force: true });

  const exampleUsers = [

    {
      username: "jane",
      email: "jane@email.com",
      password: "janellyPassword",
      address: "Somewhere In The Bronx",
    },
    {
      username: "userNum1",
      email: "userNum1@email.com",
      password: "userNum1Password",
      address: "somewhere in the world",
    },
  ];

  const randomNumGen = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let productArray = [];
  let orderArray = [];
  let productOrderArray = [];
  for (let i = 0; i <= 20; i++) {
    let productObj = {
      name: `productnum${i}`,
      image:
        "https://cdn4.iconfinder.com/data/icons/women-things-2/250/Beauty_cream_cream_cream_bottle_hair_conditioner_icon_icon-512.png",
      price: randomNumGen(10 + i, 25),
      description:
        "Hair conditioner is a hair care cosmetic product used to improve the feel, texture appearance and manageability of hair. Its main purpose is to reduce friction between strands of hair to allow smoother brushing or combing, which might otherwise cause damage to the scalp.",
      stock: 20,
    };
    productArray.push(productObj);

    //generating 20 orders half completed
    // let val = true;
    // if (i % 2 == 0) {
    //   val = false;
    // }

    // let orderObj = {
    //   completed: val,
    //   productid: randomNumGen(i, 100),
    // };

    // orderArray.push(orderObj);

    //generating 20 productOrder
    //   let productOrder = {
    //     orderid: randomNumGen(i, 100),
    //     productid: randomNumGen(i, 100),
    //   };
    //   productOrderArray.push(productOrder);
  }


  User.beforeCreate(encryptPassword);
  User.beforeUpdate(encryptPassword);
  await Promise.all(
    exampleUsers.map((user) => {
      return User.create(user);
    })
  );

  await Promise.all(
    productArray.map((product) => {
      return Product.create(product);
    })
  );

  // await Promise.all(
  //   orderArray.map((order) => {
  //     return Order.create(order);
  //   })
  // );

  // await Promise.all(
  //   productOrderArray.map((prodOrder) => {
  //     return ProductOrder.create(prodOrder);
  //   })
  // );
  // }
};

const runSeed = async () => {
  console.log("it is runningggg the seeeddd!");
  try {
    await seed();
  } catch (err) {
    console.error(err);
  } finally {
    await db.close();
    console.log("it is all done!!");
  }
};

runSeed();
