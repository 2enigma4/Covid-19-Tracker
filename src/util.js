const indiaStates = {
    "AP":"Andhra Pradesh",
    "AR":"Arunachal Pradesh",
    "AS":"Assam",
    "BR":"Bihar",
    "CT":"Chattisgarh",
    "DL":"Delhi",
    "GA":"Goa",
    "GJ":"Gujrat",
    "HR":"Haryana",
    "HP":"Himachal Pradesh",
    "JK":"Jammu and Kashmir",
    "JH":"Jharkhand",
    "KA":"Karnataka",
    "KL":"Kerala",
    "LD":"Lakshadweep",
    "MP":"Madhya Pradesh",
    "MH":"Maharashtra",
    "MN":"Manipur",
    "ML":"Meghalaya",
    "MZ":"Mizoram",
    "NL":"Nagaland",
    "OR":"Odisha",
    "PY":"Pondicherry",
    "PB":"Punjab",
    "RJ":"Rajasthan",
    "SK":"Sikkim",
    "TN":"Tamil Nadu",
    "TG":"Telangana",
    "TR":"Tripura",
    "UP":"Uttar Pradesh",
    "UT":"Uttarakhand",
    "WB":"West Bengal",
    "AN":"Andaman and Nicobar Islands",
    "CH":"Chandigarh",
    "LA":"Ladakh",
    "DN":"Dadra and Nagar",
    "TT":"India"
}

export function getMonthName(monthNum) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    
    return month[monthNum];
  }

export const getDateTime =(ISO_date)=>{
    const d= new Date(ISO_date);
    const hrs = (d.getHours()>12) ? d.getHours()-12 : d.getHours();
    const min = (d.getMinutes()<10 ? "0"+d.getMinutes() : d.getMinutes());
    const am_pm = (d.getHours()>=12) ? "PM" : "AM";
    const IST_date = `${d.getDate()} ${getMonthName(d.getMonth())}, ${(hrs==0)?"12":hrs}:${min} ${am_pm} IST`;
    return IST_date;
}

export const getStateNameByCode = function(stateCode){
    return(indiaStates[stateCode]);
}

export const sortData = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b)=>{
        if(a.confirm > b.confirm){
            return -1 ;
        }
        else{
            return 1;
        }
    });

    return sortedData;
};

export const commaFormatNumbers = (val) =>{
    var nf = new Intl.NumberFormat('en-IN');
    return nf.format(val);
}


export const formatNumbers = (val) => {
    if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + ' Cr';
      } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + ' Lac';
      }
      else if(val >= 1000)
         val = (val/1000).toFixed(2) + ' K';
      return val;
};