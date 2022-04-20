const Sequelize = require("sequelize");
const { STRING } = Sequelize;
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/canoe_db"
);
const { faker } = require("@faker-js/faker");

const Choice = conn.define("choice", {
  choiceA: {
    type: STRING,
    validate: {
      includesCalculus(value) {
        if (!value.toLowerCase().includes("calculus") && !!value) {
          throw new Error("should include 'calculus'");
        }
      },
    },
  },
  choiceB: {
    type: STRING,
    validate: {
      includesCalculus(value) {
        if (!value.toLowerCase().includes("calculus") && !!value) {
          throw new Error("should include 'calculus'");
        }
      },
    },
  },
  choiceC: {
    type: STRING,
    validate: {
      includesCalculus(value) {
        if (!value.toLowerCase().includes("calculus") && !!value) {
          throw new Error("should include 'calculus'");
        }
      },
    },
  },
});

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const randomCaseForEachLetter = (word) => {
  return word
    .split("")
    .map((letter) =>
      getRandom(2) === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
};

const insertInRandomSpot = (phrase, word) => {
  let idx = getRandom(phrase.length);
  return phrase.slice(0, idx) + word + phrase.slice(idx);
};

Choice.createRandom = function () {
  return Choice.create({
    choiceA: insertInRandomSpot(
      faker.lorem.words(getRandom(5)),
      randomCaseForEachLetter("calculus")
    ),
    choiceB: insertInRandomSpot(
      faker.lorem.words(getRandom(5)),
      randomCaseForEachLetter("calculus")
    ),
    choiceC: insertInRandomSpot(
      faker.lorem.words(getRandom(5)),
      randomCaseForEachLetter("calculus")
    ),
  });
};

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  const choice_1 = await Choice.createRandom();
  const choice_2 = await Choice.createRandom();
  const choice_3 = await Choice.createRandom();
  const choice_4 = await Choice.createRandom();
  const choice_5 = await Choice.createRandom();
};

module.exports = {
  models: {
    Choice,
  },
  conn,
  syncAndSeed,
};
