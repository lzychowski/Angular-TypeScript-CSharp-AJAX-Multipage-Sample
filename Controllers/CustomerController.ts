/// <reference path="../Interfaces/ICustomer.ts" />
/// <reference path="../Interfaces/IScope.ts" />
/// <reference path="../Interfaces/IKeyValuePair.ts" />
/// <reference path="../Interfaces/ICustomerService.ts" />
/// <reference path="../Interfaces/ICustomerController.ts" />
/// <reference path="ViewController.ts" />

module App.Controllers {
	"use strict";

	declare var routeValueDictionary: Interfaces.IKeyValuePair[];

	export class CustomerController extends ViewController<Interfaces.IScope<Interfaces.ICustomerController, Interfaces.ICustomer>> implements Interfaces.ICustomerController {

		private customer: Interfaces.ICustomer;

		public static $inject = [
			"$injector",
			"$scope",
			"customerService",
		];

		constructor(
			$injector: any,
			$scope: Interfaces.IScope<Interfaces.ICustomerController, Interfaces.ICustomer>,
			private customerService: Interfaces.ICustomerService
		) {
			super($injector, $scope);
			console.log("constructor");
			
			this.customerService = customerService;

			this.doLoad();
		}

		public doLoad(): JQueryPromise<void> {
			console.log("doLoad");

			return this.customerService.Get(
				{
					Id: Util.Obj.getValue(routeValueDictionary, "id")
				}
			).then(
				customer => this.onLoadSuccess(customer),
				error => {
					this.onLoadError(error);
					return error;
				});
		}

		public onLoadSuccess(customer: Interfaces.ICustomer): void {
			console.log("onLoadSuccess");
			this.$scope.model = customer;
		}

		public onLoadError(error: any): void {
			console.log("onLoadError: " + JSON.stringify(error));
			
			// on error redirect to a different view using RedirectService and GetRoute method in C# BaseController
			setTimeout(() => {
				this.redirectService.redirect(this.routeDictionaryService.generateData(("CustomerDisplayError"),
					[
						{ Key: "id", Value: Util.Obj.getValue(routeValueDictionary, "id") }
					]));
			}, 1000);
		}
	}
}