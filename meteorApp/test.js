if (Meteor.isClient) {
  Template.photos.rendered = function() {
		var el = this.find(".parent");
		if(el) {
			$(el).on('click', function(evt) {
				//event.stopPropagation();
				//evt.stopPropagation();
				console.log('click parent via rendered')
			});
		}
	}

  Template.photos.events({
    'click .parent' : function () {
      console.log('click parent via event')
    },
		'click .child' : function(){
      console.log('click child')
		}
  });
}
