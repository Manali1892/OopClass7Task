//Get all the countries from Asia continent /region using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((ele)=>{
        if(ele.region==='Asia'){
            return ele.name;
        }
    })
    console.log(asia);}
//Get all the countries with population of less than 2 lacs using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((ele)=>{
        return ele.population<200000;
    })
    console.log(popu);}

//Print the following details name, capital, flag using forEach function.

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((ele)=>{
        console.log(ele.name,ele.capital,ele.flag);
    })}

//Print the total population of countries using reduce function 


var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,ele)=>{
        return acc+ele.population;
    },0)
    console.log(population);}

//Print the country which use US Dollars as currency.

var request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    }