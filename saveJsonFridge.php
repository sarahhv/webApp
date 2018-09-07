<?php
    $jsonStreng="{ \"fridge\":".$_POST["jsonData"]."}";
    $file=fopen("fridge.json","w+") or die("Systemfejl: Fil kan ikke åbnes!!");
    fputs($file,$jsonStreng) or die ("Systemfejl: Data kan ikke skrives til fil!!");
    fclose($file);
?>
