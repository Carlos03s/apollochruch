//   ------------------ last 7 days -----------------
const dates = [...Array(7)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const dd =  d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
    return dd
})

export function getLast7days(data1, data2) {
   for (let i = 0; i < dates.length; i++) {
       if (dateToday[i] == data1 || dateToday[i] == data2) {
           return true
       }
   }
}
//   ------------------ -------- -----------------



//   ------------------ today -----------------
const dateToday = [...Array(1)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const dd =  d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
    return dd
})

 export function getToday(data1, data2) {
    for (let i = 0; i < dateToday.length; i++) {
        if (dateToday[i] == data1 || dateToday[i] == data2) {
            return true
        } 
    }
 }

//   ------------------ -------- -----------------



//   ------------------ last 30 days -----------------

 const dateLast30 = [...Array(30)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const dd =  d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
    return dd
})

  export function getLast30days(data1, data2) {
    for (let i = 0; i < dateLast30.length; i++) {
        if (dateToday[i] == data1 || dateToday[i] == data2) {
            return true
        }
    }
 }

 console.log(getLast30days('5/12/2022'));
//   ------------------ -------- -----------------


    
// }
