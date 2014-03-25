meteor-click-event-order-test
=============================

Reproduction of event firing order difference between Blaze and previous Meteor versions

Steps:

* Clone repo
```
$ git clone https://github.com/alanning/meteor-click-event-order-test.git
```

* Run app and click picture.
  ```
  $ meteor --release 0.7.2
  ```
* Verify browser console output:
```
  click item
  click content via rendered
  click content via event
```
* Stop app
* Run app and click picture.
  ```
  $ meteor --release 0.8.0-rc1
  ```
* Verify browser console output:
```
click content via rendered
click item
click content via event 
```
