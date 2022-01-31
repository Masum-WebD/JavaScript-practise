function getLeapYear(year){
    if(((year%400===0 ||year%100 !== 0 ) && (year%4 === 0))){
        return true;
    }

     else {return false;}
}
var myYear = 2023
var leapYear= getLeapYear(myYear);
console.log('Is year is leap year : ', leapYear);