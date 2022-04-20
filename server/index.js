const { syncAndSeed } = require("./db");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.use("/api/choices", require("./api/choices"));

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use(express.static(path.join(__dirname, "../public")));
app.get("/*", (req, res, next) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`
      
        Listening on port ${port}

        http://localhost:${port}/
      
      `)
    );
  } catch (ex) {
    console.log(ex);
  }
};
init();
