/// <reference path="../Libraries/Angular.d.ts" />"
/// <reference path="../Controllers/CustomerController.ts" />"
/// <reference path="../Services/CustomerService.ts" />"

module App {
	"use strict";

	export declare var serviceLocation: string;

	export function init() {
		console.log("init");
		var module = angular.module("customer");
		module.controller("customerUpdateController", Controllers.CustomerController);
		module.service("customerService", Services.CustomerService);
	}

	init();
}