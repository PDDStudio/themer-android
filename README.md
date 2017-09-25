# themer-android [![Travis](https://img.shields.io/travis/pddstudio/themer-android.svg)](https://travis-ci.org/pddstudio/themer-android)

An *Android* theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-android

Then pass `themer-alfred` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-android -o gen

`themer-android` will generate a `themer-android-dark.xml` / `themer-android-light.xml` (or both) in your output directory. Simply copy this file to your resources folder in Android Studio.

## License

> (c) 2017 Patrick Jung MIT License