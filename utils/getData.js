import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data.json");

export const getData = (eidIdx=30) => {
  const jsonData = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(jsonData).slice(0,eidIdx);
};

