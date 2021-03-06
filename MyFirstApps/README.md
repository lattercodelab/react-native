### React Native Project Guide

Offical Doc [Link](https://reactnative.dev/)
Offical Git [Link](https://github.com/facebook/react-native)
Gradle Command [Link](https://developer.android.com/studio/build/building-cmdline)

## Setting up a new project. 
```
$ npm install -g react-native-cli
$ npx react-native init MyProject
```

## Re-build the exists project.
```
$ npm install
// android
$ gradlew
// ios
$ pod install
```

## Install React Native Library
```
$ npm install @react-native-community/picker --save

// if react native version < 0.60, need to manually to link
$ npx react-native link @react-native-community/picker
```

## Install Standalone DevTools apps
```
$ npm install -g react-devtools
$ npx react-devtools

// To open developer menu press "d" 
// select "Debugging" and "Toggle Inspector" 
```

## other command
```
$ npx react-native start --port 8082
$ npm rebuild
```

## What's this?

1) Empty tag "<> </>" is react native fragment component that for multiple elements.
```
<>
    <td> One </td>
    <td> Two </td>
</>

Result:  

<table>
    <td> One </td>
    <td> Two </td>
</table>
```

2) yarn cli design for replace npm cli since compitiable problem but latest npm is same as yarn.

3) three dots "...Object" [Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
```
Case 1:

this.props.a = "a";
this.props.b = "b"

<Tag {...this.props} title="Name" />

function Tag(a, b, c) // props.a, props.b

```

4) Props are accept arbitray input, but read-only
```
Case 1:

<Text y=1 x=2 />

function Test(props){
    return <Text>{props.x, props.y}</Text>
}

Case 2:

<Welcome y=1 x=2>

class Welcome extends React.Componemnt{
    render(){
        return (
            <Text title={this.props.y, this.props.x} />
        )
    }
}
```

## Some case we used npm to install that occur problem.

* if build android or ios didn't work we can try to clean up the the cache of project and re-build the config.
```
$ cd android // android project root
$ chmod +x ./gradlew // make sure the "gralew" grant the access permission.
$ ./gradlew clean
$ ./gradlew tasks // if not work you can show all task
$ adb logcat *:E // log error
```

* if your has install Java SDK version: 14 or above that the "./gradlew" execute failed. Since the Java version not support.
1) gradle-wrapper.properties to change other version 
2) e.g distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip

* Issue : The development server returned 500
```
// try use command build
$ adb kill-server
// macos
$ ps -ax | grep "watchman"
$ kill PID

// windows
$ tasklist | grep "watchman*"
$ taskkill /F /IM watchman.exe

$ npx react-native run-android
```

* if app hot re-load not work that we have to clean up the cache and re-install.
```
$ npx react-native start --reset-cache
```

## Famous React Native library

1) Navigation
* React Native Navigation v5 (support bottom Tab and Drawer Navigation) [Link](https://reactnavigation.org/)
* Router-Flux [Link](https://github.com/aksonov/react-native-router-flux)

2) ViewPager
* React Native ViewPager [Link](https://github.com/callstack/react-native-viewpager)

3) ListView
* pull to refresh [Link](https://reactnative.dev/docs/refreshcontrol)
* swipe list view [Link](https://github.com/jemise111/react-native-swipe-list-view)

4) Drag
* React Native "PanRespondeer" Componemt [Link](https://reactnative.dev/docs/panresponder)

5) Rich Text View
* HtmlView [Link](https://github.com/jsdf/react-native-htmlview)

6) Popup
* ModalBox [Link](https://github.com/maxs15/react-native-modalbox)
* Modals [Link](https://github.com/jacklam718/react-native-modals)
* Popup-UI [Link](https://github.com/RafaelAugustoS/react-native-popup-ui)

7) Picker
* React Native Picker [Link](https://reactnative.dev/docs/picker)
* React Native Date Picker [Link](https://github.com/react-native-datetimepicker/datetimepicker)
* React Native Datetime Picker [Link](https://github.com/mmazzarolo/react-native-modal-datetime-picker)