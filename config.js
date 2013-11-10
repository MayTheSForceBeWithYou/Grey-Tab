"use strict";

var config = {
	defaults: {
		connection_cleanup_age: 4,
		rest_api_version: 29.0
	},
	getConfig: function(configName){
		var configValue = localStorage[configName];
		if(configValue == null || configValue == undefined)
			configValue = this.defaults[configName];
		return configValue;
	}
}