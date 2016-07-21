/// <reference path="../Interfaces/IKeyValuePair.ts" />

module App.Util {
	import KeyValuePair = Interfaces.IKeyValuePair;
	"use strict";

	// generates an object compatible with List<KeyValuePair<string,object>>(C#) that contains Id names and values as well as route name
	// ajaxData is used by AjaxAwareRedirectResult(C#) in BaseController(C#) to generate a string route value with populated Id
	export class RouteDictionaryService {

		private ajaxData: {}[] = [];

		constructor() {
			console.log("constructor");
		}

		public generateData(routeName: string, routeData: KeyValuePair[], routeValueDictionary?: KeyValuePair[]): {}[] {
			console.log("generateData");

			this.ajaxData.length = 0;

			this.addRouteName(routeName);

			var keyValuePair: {} = {};
			if (!Util.Obj.isNullOrUndefined(routeValueDictionary)) {
				routeValueDictionary.forEach((el: KeyValuePair, index, array) => {
					keyValuePair[el.Key] = el.Value;
					this.ajaxData.push(keyValuePair);
					keyValuePair = {};
				}, this);
			}

			routeData.forEach((el: KeyValuePair, index, array) => {
				keyValuePair[el.Key] = el.Value;
				this.ajaxData.push(keyValuePair);
				keyValuePair = {};
			}, this);

			this.toString();

			return this.ajaxData;
		}

		private addRouteName(routeName: string): void {
			console.log("addRouteName");
			this.ajaxData.push({ routeName: routeName });
		}

		private toString(): void {
			console.log("ajaxData: " + JSON.stringify(this.ajaxData));
		}
	}
}