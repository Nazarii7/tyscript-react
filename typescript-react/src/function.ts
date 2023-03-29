interface IAddFn {
  (a: number, b: number): number;
}

//type AddFn = (a: number, b: number) => number;

const addExpression: IAddFn = function (x, y) {
  return x + y;
};

const res = addExpression(9, 6);

const addArrow = (x: number, y: number) => {
  return x + y;
};

const res2 = addArrow(5, 9);

type AddFunction = (
  a: number,
  b: number,
  c: number,
  ...resParams: number[]
) => number;

const fn: AddFunction = (a, b, c, ...resParams) => {
  return 9;
};

fn(1, 2, 3, 4, 5, 6, 7, 8, 9);

type LogFn = (m: string) => void | string;

const log: LogFn = (message) => {
  console.log(message);
  return "6";
};

log("hello");

enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  logSize?(): void;
  getSize(): string;
  addTopping(topping: string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings: ["sause", "mushrooms"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(pizza);
export {};
