var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function()
{
    var data= JSON.parse(request.response);
    console.log(data);
//3.Use the same rest countries and print all countries name, region, sub region and population
    for(var i in data)
    {
        console.log(i,".",data[i].name,"-",data[i].region,"-",data[i].subregion,"-",data[i].population);
    }
}