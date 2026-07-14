// ==========================================
// Startup Revenue Dashboard
// ==========================================

const startupName = "techNova";
const month = "July";

const revenue = 560000;
const expenses = 325000;
const taxRate = 12;
const investors = 8;
const targetRevenue = 500000;

let grossProfit = revenue - expenses;
let taxAmount;
grossProfit > 0 ? (taxAmount = (grossProfit * taxRate) / 100) : (taxAmount = 0);

let netProfit = revenue - (expenses + taxAmount);
let revenueDifference = revenue - targetRevenue;

let buisnessStatus;

if (netProfit >= 200000) {
  buisnessStatus = "Excellent";
} else if (netProfit >= 100000) {
  buisnessStatus = "Growing";
} else if (netProfit > 0) {
  buisnessStatus = "stable";
} else {
  buisnessStatus = "Loss";
}

let investorRating;
if (netProfit > 250000) {
  investorRating = "★★★★★";
} else if (netProfit > 150000) {
  investorRating = "★★★★☆";
} else if (netProfit > 50000) {
  investorRating = "★★★☆☆";
} else {
  investorRating = "★★☆☆☆";
}

let profitMargin = (netProfit / revenue) * 100;
let targetCheck;
if (revenue >= targetRevenue) {
  targetCheck = "Target Achieved ✅";
} else {
  targetCheck = `Need ${targetRevenue - revenue} more revenue.`;
}
document.getElementById("startupName").textContent = `Startup : ${startupName}`;

document.getElementById("month").textContent = `Month : ${month}`;

document.getElementById("revenue").textContent = `Revenue : ₹${revenue}`;

document.getElementById("expenses").textContent = `Expenses : ₹${expenses}`;

document.getElementById("grossProfit").textContent =
  `Gross Profit : ₹${grossProfit}`;

document.getElementById("tax").textContent = `Tax : ₹${taxAmount}`;

document.getElementById("netProfit").textContent = `Net Profit : ₹${netProfit}`;

document.getElementById("status").textContent =
  `Business Status : ${buisnessStatus}🚀`;

document.getElementById("investorRating").textContent =
  `Investor rating : ${investorRating}`;
document.getElementById("targetCheck").textContent =
  `Target check : ${targetCheck}`;
