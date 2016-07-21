/// <reference path="../Interfaces/IKeyValuePair.ts" />
/// <reference path="../Interfaces/IScope.ts" />
/// <reference path="../Interfaces/IViewController.ts" />
/// <reference path="../Libraries/Angular.d.ts" />
/// <reference path="../Util.ts" />"
/// <reference path="../Services/RedirectService.ts" />
/// <reference path="../Services/RouteDictionaryService.ts" />
/// <reference path="../Services/PerspectiveDictionaryService.ts" />

module App.Controllers {
	"use strict";

	declare var routeValueDictionary: Interfaces.IKeyValuePair[];

	export class ViewController<T extends Interfaces.IScope<any, any>> implements Interfaces.IViewController<T> {

		protected http: ng.IHttpService;
		protected routeDictionaryService: Util.RouteDictionaryService;
		protected redirectService: Util.RedirectService;
		protected routeValueDictionary: Interfaces.IKeyValuePair[];
		protected perspectiveDictionaryService: Util.PerspectiveDictionaryService;

		public static $inject = [
			"$injector",
			"$scope"
		];

		constructor(
			private $injector: any,
			$scope: T
		) {
			console.log("constructor");

			this.http = $injector.get("$http");
			this.routeDictionaryService = $injector.get("routeDictionaryService");
			this.perspectiveDictionaryService = $injector.get("perspectiveDictionaryService");
			this.redirectService = $injector.get("redirectService");

			this.routeValueDictionary = routeValueDictionary;
		}
	}
}