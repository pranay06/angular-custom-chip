app.component("mdcChips", {
	templateUrl: "public/components/mdc-chips/template.html",
	controller: mdcChipsCtrl,
	controllerAs: "mdcChipsCtrl",
	bindings: {
		"imageSrc": "@",
		"deleteAction": "&",
		"customId": "@",
		"readonly": "<"

	},
	transclude: {
		"content": "content",
		"chipImage": "chipImage"
	}
});

function mdcChipsCtrl() {
	var mdcChipsCtrl = this;
	console.log("I am inside mdcChipsCtrl", mdcChipsCtrl);
	mdcChipsCtrl.returnCustomId = function() {
		mdcChipsCtrl.deleteAction({
			"customId": mdcChipsCtrl.customId 
		});
	};
};