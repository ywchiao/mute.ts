

class T {
  constructor(o) {
    this.a = o;

    this.a["b"] = 3;
  }
}

o = {
  "x": 4
}

b = new T(o);

o["c"] = 12;

console.log(b);
console.log(o);
console.log(this.a == o);
