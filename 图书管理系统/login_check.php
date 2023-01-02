<?php
include "link.php";
$admin_name = trim($_post['admin_name']);
$admin_psd = trim($_post['admin_psd']);
$sql = "select * from admin where admin_name = '$admin_name'";
$result = mysqli_query($link, $sql);
$rs = mysqli_fetch_array($result);
if (($admin_psd) == $rs['admin_psd']) {
    header("refresh:1,url=list.html");
}
