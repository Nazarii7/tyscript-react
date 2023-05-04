interface Params {
  size: string;
  toppings: string[];
}

interface IPiza {
  size: string;
  addToppings(topping: string): void;
}

class Pizza implements IPiza {
  public size;
  private toppings;
  constructor({ size, toppings = [] }: Params) {
    this.size = size;
    this.toppings = toppings;
  }

  public addToppings(topping: string) {
    console.log(this.validateTopping(topping));
    this.toppings.push(topping);
  }

  private validateTopping(topping: string): boolean {
    console.log(topping);
    //validation

    return true;
  }
}

const pizza: IPiza = new Pizza({ size: "medium", toppings: ["cheese"] });

pizza.addToppings("tomato");

// console.log(pizza);

// const x = pizza.addTopping("ziczic");

// console.log(x);

export {};
