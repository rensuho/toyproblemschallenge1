
//function to calculate net salary
function calculateNetSalary(grossPay , benefits) {
    let netSalary = grossPay - calculateDeductible(grossPay) - calculateTaxRate(grossPay) - benefits;
    return netSalary
    //Function to calculate PAYEE (ie. Tax) according to provided tax rates on https://www.aren.co.ke/payroll/taxrates.htm
    function calculateTaxRate(monthlyTaxablePay) {
    let rate =0.0;
    // To calculate tax rate on salary the function with the name calculateTaxRate was used, with the monthlyTaxablePay paramter.
    if (monthlyTaxablePay <= 24000){
    rate = 0.1;
    // if monthly taxable pay (Ksh) is 24,000 or anything less than 24000,the charge rate of tax will be 10% 
    } else if (monthlyTaxablePay >=  24001 && monthlyTaxablePay <= 32333) {
    rate = 0.25;
    // if monthly taxable pay (Ksh) is above 24,001 or anything less than 32333,the charge rate of tax will be 25% 
    } else if (monthlyTaxablePay > 32333)
        rate = 0.3;
    // if monthly taxable pay (Ksh) is anything above 32333 rate of tax will be 30% 
    return rate;
    } 
    
    //notify user to enter gross pay and benefits
    let grossPay = prompt("Input Gross Pay")
    GrossPay = Number (grossPay)
    let benefits = prompt ("input the benefits");
    benefits = Number (benefits)
    
    //calculate and output the net salary
    let netSalary = calculateNetSalary (grossPay, benefits);
    console.log("Net Salary: " + netSalary) 
    
    // Function to calculate NHIF deductibles
    function calculateDeductible(grossPay) {
        let NhifDeductible = 0;
    if (grossPay <=5999){
        NhifDeductible = 150;
    // if gross pay (Ksh) is 5999 or anything less, a deduction of 150 is to be made to NHIF
    } else if (grossPay >=6000 && grossPay <=7999){
        NhifDeductible = 300;
    // if gross pay (Ksh) is 6000 or more and 7999 or less a deduction of 300 is to be made to NHIF
    } else if (grossPay >=8000 && grossPay <=11999){
        NhifDeductible = 400;
    // if gross pay (Ksh) is 8000 or more and 11999 or less a deduction of 400 is to be made to NHIF
    } else if (grossPay >=12000 && grossPay <=14999){
        NhifDeductible = 500;
    // if gross pay (Ksh) is 12000 or more and 14999 or less a deduction of 500 is to be made to NHIF
    } else if (grossPay >=15000 && grossPay <=19999){
        NhifDeductible = 600;
    // if gross pay (Ksh) is 15000 or more and 19999 or less a deduction of 600 is to be made to NHIF
    } else if (grossPay >=20000 && grossPay <=24999){
        NhifDeductible = 750;
    // if gross pay (Ksh) is 20000 or more and 24999 or less a deduction of 750 is to be made to NHIF
    } else if (grossPay >=25000 && grossPay <=29999){
        NhifDeductible = 850;
    // if gross pay (Ksh) is 25000 or more and 29999 or less a deduction of 850 is to be made to NHIF
    } else if (grossPay >=30000 && grossPay <=34999){
        NhifDeductible = 900;
    // if gross pay (Ksh) is 30000 or more and 34999 or less a deduction of 900 is to be made to NHIF
    } else if (grossPay >=35000 && grossPay <=39999){
        NhifDeductible =950;
    // if gross pay (Ksh) is 35000 or more and 39999 or less a deduction of 950 is to be made to NHIF
    } else if (grossPay >=40000 && grossPay <=44999){
        NhifDeductible =1000;
    // if gross pay (Ksh) is 40000 or more and 44999 or less a deduction of 1000 is to be made to NHIF
    } else if (grossPay >=45000 && grossPay <=49999){
        NhifDeductible =1100;
    // if gross pay (Ksh) is 45000 or more and 49999 or less a deduction of 1100 is to be made to NHIF
    } else if (grossPay >=50000 && grossPay <=59999){
        NhifDeductible = 1200;
    // if gross pay (Ksh) is 50000 or more and 59999 or less a deduction of 1200 is to be made to NHIF
    } else if (grossPay >=60000 && grossPay <=69999){
        NhifDeductible = 1300;
    // if gross pay (Ksh) is 60000 or more and 69999 or less a deduction of 1300 is to be made to NHIF
    } else if (grossPay >=70000 && grossPay <=79999){
        NhifDeductible = 1400;
    // if gross pay (Ksh) is 70000 or more and 79999 or less a deduction of 1400 is to be made to NHIF
    } else if (grossPay >=80000 && grossPay <=89999){
        NhifDeductible = 1500;
    // if gross pay (Ksh) is 80000 or more and 89999 or less a deduction of 1500 is to be made to NHIF
    } else if (grossPay >=90000 && grossPay <=99999){
        NhifDeductible = 1600;
    // if gross pay (Ksh) is 90000 or more and 99999 or less a deduction of 1600 is to be made to NHIF
    }else if (grossPay >=100000){
     NhifDeductible = 1700;
    // if gross pay (Ksh) is 100000 or more a deduction of 1700Ksh is to be made
    }
    return NhifDeductible;
    }
    
    }
    
    
    //Function to calculate NSSF deductions (new rates):
    function calculatePension (GrossPay){
    return grossPay * 0.06
    }

    
    
   
