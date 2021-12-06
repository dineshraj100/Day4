var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function()
{
    var data= JSON.parse(request.response);
    console.log(data);
//display all the country flags in console
    for(var i in data)
    {
        console.log(i,".",data[i].name,"-",data[i].flag);
    }
}