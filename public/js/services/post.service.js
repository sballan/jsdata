'use strict';

app.factory('Post', function(DS,$state) {

	var Post = DS.defineResource({
		name:'post',
		relations: {
			belongsTo: {
				user: {
					localField: 'user',
					localKey: 'userId',
					parent: true
				}
			}
		},
		methods: {
			go: function() {
				$state.go('post',{postId: this._id});
			}
		}
	})



	/*

		TODOS:
		1) create a js-data Post resource that establishes a relationship
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page
				(HINT: see post.js)

	*/
	return Post;
});
