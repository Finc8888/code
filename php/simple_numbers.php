<?php 
function get_simple_nums($number){
    $simple_arr = [2];
    for($i = 3; $i< INF;$i++){
        if(count($simple_arr) < $number){
            foreach($simple_arr as $index => $value){
                if($i % $value == 0) break;
                elseif(($index + 1) < count($simple_arr)){   
                }
                else $simple_arr[] = $i;
            }
        }
        else break;
    }
    return $simple_arr;
}
function get_simple_nums_v2($number){
    $simple_arr = [2];
    for($i = 3; $i< INF;$i++){
        if(count($simple_arr) < $number){
            //пробегать по копии массива начинающегося с sqrt(i)
            foreach($simple_arr as $index => $value){
                if($i % $value == 0) break;
                elseif(($index + 1) < count($simple_arr)){   
                }
                else $simple_arr[] = $i;
            }
        }
        else break;
    }
    return $simple_arr;
}
print_r(get_simple_nums(100000));