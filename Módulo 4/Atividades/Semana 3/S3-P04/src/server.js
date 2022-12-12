import "dotenv/config";
import { app } from "./app";
import { startDatabase } from "./database";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await startDatabase();
    console.log(`App is running on http://localhost:${PORT}`);
});