import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  // throw new Error("Simulated fetch error");
  return db.prepare("SELECT * FROM meals").all();
}
