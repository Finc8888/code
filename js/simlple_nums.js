function get_simple_nums(amount){
    let simple_arr = [2];
    
    for(let item = 3;item < Number.MAX_SAFE_INTEGER;item++){
        if(simple_arr.length < amount){
            for (const simple_num of simple_arr) {
                if(item % simple_num == 0){
                    break;
                }
                else if((simple_arr.indexOf(simple_num) + 1) < simple_arr.length){
                    
                }
                else{
                    simple_arr.push(item);
                    break;
                }  
            }
               
        }
        else{
            break;
        }
    }
    return simple_arr;
}
console.log(get_simple_nums(1000));