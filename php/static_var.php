<?php
function counter(){
    static $count = 0;
    $count++;
    echo "$count\n";
}
foreach(range(1,20) as $i) counter();