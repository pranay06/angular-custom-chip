app.component("mdcChips", {
	templateUrl: "public/components/mdc-chips/template.html",
	controller: mdcChipsCtrl,
	controllerAs: "mdcChipsCtrl",
	bindings: {
		"imageSrc": "@",
		"text": "@",
		"deleteAction": "&",
		"customId": "@",
		"readonly": "<"

	}
});

function mdcChipsCtrl() {
	var mdcChipsCtrl = this;
	console.log("I am inside mdcChipsCtrl");
	mdcChipsCtrl.returnCustomId = function() {
		mdcChipsCtrl.deleteAction({
			"customId": mdcChipsCtrl.customId 
		});
	};
};