const { client } = require("./dbConfig");

async function insertOneOrManyDocs() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("college");
    const coll = db.collection("students");
    // insert code goes here
    const docs = [{ name: "Halley", age: 20, roll: 1 }];
    const result = await coll.insertMany(docs);
    // display the results of your operation
    console.log(result.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

insertOneOrManyDocs().catch(console.dir);
