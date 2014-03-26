meteor-click-event-order-test
=============================

Reproduction of event firing order difference between Blaze, previous Meteor versions, and plain jQuery.

Steps:

* Clone repo
```
$ git clone https://github.com/alanning/meteor-click-event-order-test.git
```

* Run pure jQuery app and click picture.
```
  $ cd meteor-click-event-order-test/jqueryApp
  $ python webserver.py
  $ open http://localhost:8000/test.html
```
* Verify browser console output:
```
click child direct
click child parent delegate
click parent direct
click child body delegate
click parent body delegate
```
* Stop app
* Run app and click picture.
```
  $ cd ../meteorApp
  $ meteor --release 0.7.2
```
* Verify browser console output:
```
  click child
  click parent via rendered
  click parent via event
```
* Stop app
* Run app and click picture.
```
  $ meteor --release 0.8.0-rc1
```
* Verify browser console output:
```
click parent via rendered
click child
click parent via event 
```
