import { app } from "./app";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));