export function Entry(title,body){
  this.title = title;
  this.body = body;
}
Entry.prototype.GetWords=function(){
  return this.body.split(" ").length;
}
Entry.prototype.GetVowels=function(){
  let bodyArray=this.body.toLowerCase().split("");
  // console.log(bodyArray);
  let vowelCount=0;

  for(var i=0; i<bodyArray.length; i++) {
    // console.log(bodyArray[i]);
    if(bodyArray[i] == "a" || bodyArray[i] == "e" || bodyArray[i] == "o" || bodyArray[i] == "i" || bodyArray[i] == "u"){
      vowelCount++;
      }
    }
    return vowelCount;
}
