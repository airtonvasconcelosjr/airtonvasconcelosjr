
<?php

//para imprimir "X"
function xPattern($str)
{
    $len = strlen($str);

    for ($i = 0, $j = $len - 1; 
         $i <= $len, $j >= 0; 
         $i++, $j--)

    {
        if ($i < $j)
        {
            for ($x = 0; $x < $i; $x++)
                echo " ";
            echo $str[$i];

            for ( $x = 0; $x < $j - $i - 1; 
                                      $x++)
                echo " ";

            echo $str[$j]."\n";

        }
        if ($i == $j)
        {
            for ($x = 0; $x < $i; $x++)

                echo " ";
 

            echo $str[$i]."\n";

        }
        else if ($i > $j)
        {
            for ($x = $j - 1; $x >= 0; 
                                 $x--)

                echo " ";
 
            echo $str[$j];

            for ( $x = 0; $x < $i - $j - 1;
                                      $x++)

                echo " ";
 

            echo $str[$i]."\n";
        }
    }
}
 
xPattern("*******");
echo ("\n");

//Para imprimir "+"
function cruz($str)
{ 
    $n = strlen($str);
  
        $arr = array(); 
        $m = $n / 2;
  
        for ($i = 0; $i < $n; $i++) 
        {
            for ($j = 0; $j < $n; $j++) 
            {
                $arr[$i][$j] = ' ';
            }
        }
  
        for ($i = 0; $i < $n; $i++) 
        { 
            $arr[$i][$m] = $str[$i];
        }
          
        for ($i = 0; $i < $n; $i++) 
        { 
            $arr[$m][$i] = $str[$i];
        }
  
        for ($i = 0; $i < $n; $i++)
        {
            for ($j = 0; $j < $n; $j++) 
            {
                echo ($arr[$i][$j] . " " );
            }
            echo ("\n");
        }
    }
  
$str = "*******";
cruz($str);
      
?>
