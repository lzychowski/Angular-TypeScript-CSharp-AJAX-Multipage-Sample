/// <reference path="IViewController.ts" />
/// <reference path="IScope.ts" />

module App.Interfaces {
	"use strict";

	export interface ICustomerController extends IViewController<IScope<Interfaces.ICustomerController, Interfaces.ICustomer>> {

		doLoad(): JQueryPromise<void>;
		onLoadSuccess(customer: Interfaces.ICustomer): void;
		onLoadError(error: any): void;
	}
}