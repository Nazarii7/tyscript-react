interface PluginConfiq {
  readonly selector: string;
  perPage?: number;
  startIndex?: number;
  draggable?: boolean;
}

const confiq: PluginConfiq = {
  selector: "#plugin-1",
  //   perPage: 2,
  //   startIndex: 0,
  //   draggable: false,
};

interface Employees {
  [key: string]: number;
}

const employees: Employees = {
  mango: 66,
  poly: 6,
  ajax: 3,
  wiki: 50,
};

const entries = Object.entries(employees);
let bestEmployeeName = "";
let bestEmployeeProIndex = 0;

for (const [name, value] of entries) {
  if (bestEmployeeProIndex <= value) {
    bestEmployeeName = name;
    bestEmployeeProIndex = value;
  }
}

console.log(confiq, employees, bestEmployeeName);

export {};
