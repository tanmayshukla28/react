const xlsx = require("xlsx");
const fs = require("fs");

const workbook = xlsx.readFile("./data/AllColleges.xlsx");

// ✅ Use correct sheet
const sheet = workbook.Sheets[workbook.SheetNames[0]];

// ✅ Convert to raw JSON
const rawData = xlsx.utils.sheet_to_json(sheet, { defval: "" });

// ✅ Skip metadata rows (first 2 rows)
const cleaned = rawData.slice(2).map((row) => ({
  AISHECode: row["ALL COLLEGE"],
  Name: row["__EMPTY"],
  State: row["__EMPTY_1"],
  District: row["__EMPTY_2"],
  Website: row["__EMPTY_3"],
  YearOfEstablishment: row["__EMPTY_4"],
  Location: row["__EMPTY_5"],
  CollegeType: row["__EMPTY_6"],
  Management: row["__EMPTY_7"],
  UniversityCode: row["__EMPTY_8"],
  UniversityName: row["__EMPTY_9"],
  UniversityType: row["__EMPTY_10"],
}));

// ✅ Limit to top 2000
const top2000 = cleaned.slice(0, 2000);

// ✅ Save to JSON
fs.writeFileSync("./data/colleges.json", JSON.stringify(top2000, null, 2));
console.log("✅ Cleaned and saved top 2000 colleges");
