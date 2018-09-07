<?php
    $jsonStreng="{ \"shopping\":".$_POST["jsonSData"]."}";
    $file=fopen("shopping.json","w+") or die("Systemfejl: Fil kan ikke åbnes!!");
    fputs($file,$jsonStreng) or die ("Systemfejl: Data kan ikke skrives til fil!!");
    fclose($file);
?>
