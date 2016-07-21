module App.Interfaces {
	"use strict";

	export interface ICustomerService {
		
		Get(view: any) : JQueryPromise<Interfaces.ICustomer>;
	}
}