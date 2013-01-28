REM prerequisites to execute this batch file
REM install jam (e.g. npm install -g jamjs )
REM install lessc (e.g. npm install -g less )
REM put r.js file in the same directory

echo off
set CURRENT=%CD%
cd %CURRENT%

Call compile.less.bat
Call build.css.bat

echo Optimizing the JavaScript source......
jam compile -o ../../app/app.min.js -i app -i jam/bootstrap/docs/assets/js/bootstrap.js -v --no-license --no-minify
echo JavaScript files Optimization completed!

