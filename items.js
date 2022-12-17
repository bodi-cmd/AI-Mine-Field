module.exports = Object.freeze([
  {
    coordinates: {
      x: 1,
      y: 1,
    },
    type: "HINT",
    value: "all y -mine(1,y)",
    hint: "all y -mine(1,y)",
  },
  {
    coordinates: {
      x: 1,
      y: 4,
    },
    type: "HINT",
    value: "mine(6,4)",
    hint: "mine(6,4)",
  },
  {
    coordinates: {
      x: 1,
      y: 5,
    },
    type: "HINT",
    value: "all x ( mine(x,1) <-> mine(1,x) )",
    hint: "all x ( mine(x,1) <-> mine(1,x) )",
  },
  {
    coordinates: {
      x: 1,
      y: 7,
    },
    type: "HINT",
    value: "exists x1 mine(x1,3) -> exists x2 mine(x2,8)",
    hint: "exists x1 mine(x1,3) -> exists x2 mine(x2,8)",
  },
  {
    coordinates: {
      x: 3,
      y: 3,
    },
    type: "HINT",
    value: "exists y mine(6,y) -> -exists x mine(x,8)",
    hint: "exists y mine(6,y) -> -exists x mine(x,8)",
  },
  {
    coordinates: {
      x: 3,
      y: 6,
    },
    type: "HINT",
    value: "mine(4,2) & mine(5,7)",
    hint: "mine(4,2) & mine(5,7)",
  },
  {
    coordinates: {
      x: 4,
      y: 8,
    },
    type: "HINT",
    value: "mine(3,5) | mine(5,3)",
    hint: "mine(3,5) | mine(5,3)",
  },
  {
    coordinates: {
      x: 6,
      y: 1,
    },
    type: "HINT",
    value: "all x ( mine(9,x) -> mine(1,x) )",
    hint: "all x ( mine(9,x) -> mine(1,x) )",
  },
  {
    coordinates: {
      x: 6,
      y: 6,
    },
    type: "HINT",
    value: "-mine(2,3) & -mine(3,2)",
    hint: "-mine(2,3) & -mine(3,2)",
  },
  {
    coordinates: {
      x: 8,
      y: 3,
    },
    type: "HINT",
    value: "-exists x mine(x,x)",
    hint: "-exists x mine(x,x)",
  },
  {
    coordinates: {
      x: 8,
      y: 3,
    },
    type: "HINT",
    value: "all x all y all z ( mine(x,y) & !(y = z) -> -mine(x,z))",
    hint: "-exists x mine(x,x)",
  },
  {
    coordinates: {
      x: 3,
      y: 5,
    },
    type: "MINE",
    value: "asd",
  },
  {
    coordinates: {
      x: 4,
      y: 2,
    },
    type: "MINE",
    value: "asd",
  },
  {
    coordinates: {
      x: 5,
      y: 7,
    },
    type: "MINE",
    value: "asd",
  },
  {
    coordinates: {
      x: 6,
      y: 4,
    },
    type: "MINE",
    value: "asd",
  },
]);
