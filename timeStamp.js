const moment = require('moment')

const date1 = moment('2020-06-12','YYYY-MM-DD')   // random date1
const date2 = moment('2020-06-13','YYYY-MM-DD')  // random date2
const timestampDiff = date2.valueOf() - date1.valueOf() 



const dateGeneratingFunction = function(D){
    const timeArray1 = Object.keys(D)
    const timeArray =  Object.keys(D)

    for(let i = 0;i <= timeArray.length-2; i ++){
        let j = i
        const date = moment(timeArray[i+1],"YYYY-MM-DD")
        try{
            while(!(date.valueOf() - moment(timeArray[j],'YYYY-MM-DD').valueOf() === timestampDiff)){    
                timeArray.splice(j+1,0,moment(timeArray[0],'YYYY-MM-DD').add(j+1,'day').format('YYYY-MM-DD').toString())
                j += 1
            }
        }catch(e){
            console.log(e)
        }
    }


    const result = {}
    result[timeArray[0]] = D[timeArray[0]]


    let j = 0
    let muliple = ((D[timeArray1[j+1]]-D[timeArray1[j]])* timestampDiff) / (moment(timeArray1[j+1],"YYYY-MM-DD").valueOf() - moment(timeArray1[j],"YYYY-MM-DD").valueOf())
    

    for(let i = 1;i<timeArray.length;i++){
        if(timeArray[i] === timeArray1[j + 1]){
            result[timeArray[i]] = result[timeArray[i-1]] + muliple
            j += 1
            muliple = ((D[timeArray1[j+1]]-D[timeArray1[j]])* timestampDiff) / (moment(timeArray1[j+1],"YYYY-MM-DD").valueOf() - moment(timeArray1[j],"YYYY-MM-DD").valueOf())
        }else{
            result[timeArray[i]] = result[timeArray[i-1]] + muliple
        }
    }

    return result
    
}

const D1 = {'2019-01-10':10,'2019-01-11':20,'2019-01-13':10}
console.log(dateGeneratingFunction(D1))

const D2 = {'2019-01-01':100,'2019-01-04': 115}
console.log(dateGeneratingFunction(D2))


const D3 = {'1970-01-01':2, '1983-04-02':40000,'1987-04-02':400,'1991-04-02':4000,'1995-04-02':4,'1999-04-02':45,'2003-04-02':496,'2007-04-02':410,'2011-04-02':989,'2100-01-01':1000000}
console.log(dateGeneratingFunction(D3))






