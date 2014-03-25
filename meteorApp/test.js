if (Meteor.isClient) {
  Template.photos.rendered = function() {
		var el = this.find(".content");
		if(el) {
			$(el).on('click', function(evt) {
				//event.stopPropagation();
				//evt.stopPropagation();
				console.log('click content via rendered')
			});
		}
	}

  Template.photos.events({
    'click .content' : function () {
      console.log('click content via event')
    },
		'click .item' : function(){
      console.log('click item')
		}
  });
}
