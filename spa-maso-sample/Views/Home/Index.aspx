<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>spa-sample</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- styles from bootstrap -->
    <link href="webapp/app/jam/bootstrap/less/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            padding-top: 60px;
        }
    </style>

    <!-- Development Mode -->
    <link href="webapp/app/styles/style.less" rel="stylesheet/less" type="text/css" />
    <!-- Release Mode -->
    <!--<link href="webapp/app/styles/style.min.css" rel="stylesheet" />-->

    <script src="webapp/app/jam/modernizr/modernizr-2.6.2.min.js" type="text/javascript"></script>
</head>
<body data-bind="resizeLeftMain: {}">

    <div id="busyindicator"></div>
    <div id="top" class="navbar navbar-inverse navbar-fixed-top"></div>
    <div id="left"></div>
    <div id="main"></div>

    <!-- Development Mode -->
    <script src="webapp/app/jam/less/dist/less-1.3.1.js" type="text/javascript"></script>
    <script data-main="webapp/app/app" src="webapp/app/jam/require.js"></script>
    <!-- Release Mode -->
    <!--<script src="webapp/app/app.min.js"></script>-->
</body>
</html>

