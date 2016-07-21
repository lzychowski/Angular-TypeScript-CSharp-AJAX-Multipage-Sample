/// <reference path="../Libraries/Angular.d.ts" />"

module App.Interfaces {
	"use strict";
	
	export interface IScope<TController, TModel> extends ng.IScope {
		vm: TController;
		model: TModel;
	}
}