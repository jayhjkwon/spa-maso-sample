echo off
set CURRENT=%CD%
cd %CURRENT%

echo Optimizing the CSS files.....
node r.js -o css.build.js
echo CSS files Optimization completed!