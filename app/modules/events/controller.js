/*
  Event Controller Class
  --------------------------

  This is our controller code for the event view goes.
  This is where we reach out to get all of the things our
  view needs to function (like data from APIs) and
  pass it into the view.

  STEP 1: Save the id param from $stateParams to
          this.id

  STEP 2: Create a new method getData() that makes
          a $http.get call to `http://gateway.marvel.com:80/v1/public/events/<event id here>?apikey=<api key here>`

          Remember, our class is going to make an object. That means we
          have to use our _internal_ name for $http, which will be
          this._$http.

          The method should have a .then() which gets the response.
          Remember, this is different than fetch. response.data will
          contain the data as JSON without _any_ conversion step. You
          can just start using it.

          Save title, description, characters and image as properties on this.
          Remember that you have to assemble image from the thumbnail
          properties on the response.

  STEP 3: Call getData() to make your AJAX request to the Marvel API.
          Make sure you do this after you setup all of your variables
          in your constructor.

          You don't need to respond to it. It's going to set some properties
          on this on its own. Just call it and let it go.

*/

class EventsController {

	constructor($http, $stateParams) {
    this._$http = $http;
		this.$stateParams = $stateParams;
		this.id = this.$stateParams.id;
		this.getData();
	}

  getData() {
		this._$http
			.get(`http://gateway.marvel.com:80/v1/public/events/${encodeURI(this.$stateParams.id)}?apikey=ed7601d2962065f2fc12241cbc32a585`)
			.then((response) => {
				console.log(response);
				// Save title, description, characters and image as properties on this.
				// Remember that you have to assemble image from the thumbnail
				// properties on the response.
				this.title = response.data.data.results[0].title;
				this.description = response.data.data.results[0].description;
				this.characters = response.data.data.results[0].characters.items;
				this.image = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`;
				console.log(this.characters);
			})
  }

}

export default EventsController
