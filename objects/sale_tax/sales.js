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

const calculateSalesTax = function(salesData, taxRates) {

};

  // loop through sales data 
  for (let i = 0; i < salesData.length; i++ ){
    console.log('name:', (salesData[i].name))
    if(salesData[i].province === 'SK'){
      tax = 0.10
    }
  };
//loop through sales tax 
for (let j = 0; j < salesTaxRates.length; j++ ){
  if(salesTaxRates[i].province === 'SK'){

  }
}

calculateSalesTax(companySalesData,salesTaxRates)
// apply sale tax of each prov in each object
// 


// condence sales of similar names
