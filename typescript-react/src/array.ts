const temps: readonly number[] = [32, 56, 67];

const t = temps.filter((t) => t > 68);

console.log(t);

type Coords = [number, number];

const coords: Coords = [23, 45];

console.log(coords);

const entries = Object.entries({ a: 5, b: 9 });

for (const entry of entries) {
  console.log(entry);
}

export {};
