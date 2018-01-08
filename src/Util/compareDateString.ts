
 export function compareTimeStamp(d1:string, d2:string) {
    let firstDate = 0
    let secondDate  = 0
    if (d1)
      firstDate = new Date(d1).getTime()
    if (d2)
      secondDate = new Date(d2).getTime()
    return secondDate - firstDate
  }
  
  /*
  export function compareTimeStamp(d1, d2) {
     let firstDate = ""
     let secondDate = ""
     if (d1)
       firstDate = this.datePipe.transform(d1, "yyyy-MM-dd HH:mm:ss:SSS")
     if (d2)
       secondDate = this.datePipe.transform(d2, "yyyy-MM-dd HH:mm:ss:SSS")
     return secondDate.localeCompare(firstDate)
   }
   */