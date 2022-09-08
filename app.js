// filter folsy values method
Array.prototype.bool = function(){
    let result = []
    this.map(el => el !== undefined && el!== false && el!== 0 && el !== null  && el? result.push(el):el)
    return result
}



// all truty types equal array method

Array.prototype.equalTypes = function(){
    let result = true
  if(this.every(el => typeof el === `string`)){
    result 
  }else if(this.every(el => typeof el === `number`)){
    result 
  }else if(this.map(el => el === undefined && el === false && el === 0 && el && el === null)){
    throw new TypeError(`there is wrong or not equal type please be carefully`)
  }

    return result
}



// numbers digit method

Number.prototype.numDigit = function(){
  let result = ``
  return result.concat(this).length
    
}

// string polidrom or not method

String.prototype.polidrom = function(){
    let result = ``
    for(let i = this.length - 1;i>=0;i--){
        result += this[i];
    }
  return this == result?true:false
   
}


// number resverse method

Number.prototype.numberReverse = function(){
  return  parseFloat(this.toString().split("").reverse().join(""))
}


// when the array elements created Object key value

Array.prototype.mutate = function(){
    let obj = {}
    for(let i = 0;i<this.length;i++){
        if(obj[this[i]]){
            obj[this[i]] += 1
        }else{
            obj[this[i]] = 1
        }
    }
    return obj
}


// find all strings until array method

Array.prototype.onlyString = function(){
    let array = []
    let result = `there is not string `
        for(let i = 0;i<this.length;i++){
            if(typeof this[i] === `string` && this[i]){
                array.push(this[i])
            }
        }
    return array
}


// find all truty numbers until array method

Array.prototype.onlyNumber = function(){
    let array = []
        for(let i = 0;i<this.length;i++){
            if(typeof this[i] === `number` && this[i]){
                array.push(this[i])
            }
        }
    return array
}






