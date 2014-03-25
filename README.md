meteor-click-event-order-test
=============================

Reproduction of event firing order difference between Blaze and previous Meteor versions

Steps:

1. Run app and click picture.

Console output:

$ meteor --release 0.7.2
click item
click content via rendered
click content via event

$ meteor --release 0.8.0-rc1
click content via rendered
click item
click content via event 
