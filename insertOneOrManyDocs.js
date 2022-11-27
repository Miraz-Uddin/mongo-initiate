import client from "./index.js";

async function insertOneOrManyDocs() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("college");
    const coll = db.collection("students");
    // insert code goes here
    const docs = [{ name: "Riaz", age: 22, roll: 5 }];
    const result = await coll.insertMany(docs);
    // display the results of your operation
    console.log(result.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

insertOneOrManyDocs().catch(console.dir);
