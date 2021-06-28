import app from "./server"
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI, {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParser: true,
    }
).catch(error => {
    console.log(error.stack);
    process.exit(1);
}).then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
});