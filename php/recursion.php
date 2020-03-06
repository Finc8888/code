<?php
function factorial($n){
    if($n == 1) return 1;
    $factorial = $n * factorial($n - 1);
    return $factorial;
}
// foreach(range(1,10) as $item) echo factorial($item) ."\n";

function dumper($obj){
    echo 
    "<pre>"
        ,htmlspecialchars(dumper_get($obj))
    ," </pre>";
}
function dumper_get($obj,$left_sp=''){
    if(is_array($obj)){
        $amount = count($obj);
        $type = "Array[$amount]";
    }
    elseif(is_object($obj)){
        $type = "Object";
    }
    elseif(gettype($obj) == 'boolean'){
        return $obj ? "true" : "false";
    }
    else return "\"$obj\"";
    $buf = $type;
    $left_sp .= "    ";
    for(Reset($obj);list($k,$v) = each($obj);){
        if($k === "GLOBALS") continue;
        $buf .= "\n$left_sp$k =>" . dumper_get($v,$left_sp);
    }
    return $buf;

}
dumper(['root'=>['parent'=>['child'=>[1,2,3]]]]);