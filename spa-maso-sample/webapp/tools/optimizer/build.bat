echo off
set CURRENT=%CD%
cd %CURRENT%

echo Optimizing the CSS source......
node r.js -o css.build.js
echo CSS files Optimization completed!

echo Optimizing the JavaScript source......
jam compile -o ../../app/app.min.js -i app -i jam/bootstrap/docs/assets/js/bootstrap.js -v --no-license --no-minify
echo JavaScript files Optimization completed!

