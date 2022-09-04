const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// Expected Results
// { 
//  Telus: {
//   totalSales: 1300
//   totalTaxes: 144
// },
// Bombardier: {
//   totalSales: 800
//   totalTaxeas: 40
// }
// }


const calculateSalesTax = function(salesData, taxRates) {
  let outobj = {}
  for (let eachSale of salesData){
    let combine = {}
    let name = ""
    let rate = 0
    let sales = 0
    let tax = 0
    for (const key in eachSale) {
      if (key === "province") {
        rate = taxByProv(key[eachSale], taxRates)
      }
      if (key === "sales") {
        sales = totalSales(key[eachSale], rate)
        tax = rate *sales
      }
      combine.sales = sales
      combine.tax = tax
      combine.name = name
    } 
    return combine
  }
};




const totalSales = (sales) => {
  let total = 0;
  for (const sale of sales) {
    total += sale;
  }
  return total;
};

const taxByProv = (companyProv, taxRatesByProv) => {
  let rate = 0;
  for (let prov in taxRatesByProv) {
    if (companyProv === prov) {
      rate = taxRatesByProv[prov];
    }
  }
  return rate;
};

// taxByProv("AB", salesTaxRates)
const result = calculateSalesTax(companySalesData,salesTaxRates)
console.log(result)


//results seperated by company name
//total sales and total tax returned


//for each object 
//determine prv
// sum up all sales and add it as k:val
//calculate tax  and add it in as k:v to object
//loop through array of object and condense same companies
//return company name  with total sales and tax



