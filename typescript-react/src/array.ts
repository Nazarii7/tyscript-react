const temps: readonly number[] = [32, 56, 67];

const t = temps.filter((t) => t > 68);

console.log(t);

const coords: [number, number] = [23, 45];

console.log(temps, coords);

const entries = Object.entries({ a: 5, b: 9 });

for (const entry of entries) {
  console.log(entry);
}

export {};
