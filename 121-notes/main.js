const firstName = "sinth";

const csv = "charlie,36,south west";
console.log(firstName.split(""));

const csvRow = csv.split(",");

const object = {
  name: csvRow[0],
  age: csvRow[1],
  location: csvRow[2],
};

console.log(object);

console.log(csvRow.join("+"));

console.log(
  csvRow
    .filter((item) => {
      return !item.includes("c");
    })
    .map((item) => {
      return `<p>${item}</p>`;
    })
    .join("\n"),
);
