<?php 
$arr = [1,3,4,5,6,7];
$arrayobject = new ArrayObject($arr);
$it = $arrayobject->getIterator();
for($it->rewind();$it->valid();$it->next()){
    echo "{$it->key()} -> {$it->current()}\n";
}
// 
foreach($it as $key=>$value){
    if($value%2==0){
        echo("$value\n");
    }
}
unset($it);
