/// <reference path="../Interfaces/ICustomerService.ts" />
/// <reference path="../Interfaces/ICustomer.ts" />
/// <reference path="../Libraries/jquery.d.ts" />

module App.Services {
	"use strict";

	declare var serviceLocation: string;

	export class CustomerService  implements Interfaces.ICustomerService {

		constructor() {
			console.log("constructor");
            serviceLocation = "customer";
		}

		public Get(view: any) : JQueryPromise<Interfaces.ICustomer> {
			serviceLocation += "/" + view.Id;
			// call to AJAX handler
			return null;
		}
	}
} 