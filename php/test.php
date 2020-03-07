<?php
echo 'PHP_INT_MAX = ',PHP_INT_MAX,';<br>';

echo 'PHP_INT_SIZE = ',PHP_INT_SIZE,';<br>';

echo '31415926e-7 = ',31415926e-7,';<br>';

echo 'sqrt(-1) = ',sqrt(-1),';<br>';

echo '1.8e308 = ',1.8e308;
echo '<br>';

echo 'gettype(NAN) = ',gettype(NAN);
echo '<br>';

echo 'gettype(INF) = ',gettype(INF);
echo '<br>';

echo 'gettype("Hello world") = ',gettype("Hello world");
echo '<br>';

echo 'intval("11",2) = ',intval("1001010101010101",2);
echo '<br>';

$var = true;
echo 'settype("true","integer") = ',settype($var,"integer");echo $var;
echo '<br>';

$arr = ['test'=>1];
$test = $arr['test'] ?? 0;
$check = $arr['check'] ?? 0;
$super_check = $arr['check'] ?? $arr['test'] ?? 0;
echo "test - $test";
echo '<br>';
echo "check - $check";
echo '<br>';
echo "super_check - $super_check";
echo '<br>';

$arr = [6,4,2,6,9,0,1,2,3,4,6,1,9,566,3,654,5,3,234,65,87,4,2,23,5];
$arr2 = [6,4,2,6,9,0,1,2,3,4,6,1,9,566,3,654,5,3,234,65,87,4,2,23,5];
function cmp($a,$b){
    if($a < $b) return -1;
    elseif($a === $b) return 0;
    else return 1;
}
usort($arr,'cmp');
usort($arr2,function($a,$b){return $b<=>$a;});
echo '<pre>';
var_export($arr);
echo '</pre>';
echo '<br>';
echo '<pre>';
var_export($arr2);
echo '</pre>';
echo '<br>';
die("TEST")
?>