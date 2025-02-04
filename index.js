class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items.length > pos){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds')
    }
 
  }

  max() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce((acc,e)=>{
     return acc + e 
    },0)
  }

  avg() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }
     return this.items.reduce((acc,e)=>{
        return acc + e
      },0)/this.items.length;
  
}
}
module.exports = SortedList;
