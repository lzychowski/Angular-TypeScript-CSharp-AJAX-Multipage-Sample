/// <reference path="../Libraries/jquery.d.ts" />
/// <reference path="../Interfaces/IKeyValuePair.ts" />

module App.Util {
	
	export class String {
		
		public static isNullOrWhitespace(input: string): boolean {
			if (typeof input === "undefined" || input === null) return true;
			return input.replace("/\sg", '').length < 1;
		}

		public static emptyIfNullOrWhitespace(input: string): string {
			if (this.isNullOrWhitespace(input))
				return "";
			return input;
		}
	}

	export class Obj {
		
		public static isNullOrUndefined(input: any): boolean {
			return typeof input === "undefined" || input === null;
		}
		
		public static getValue(values: Interfaces.IKeyValuePair[], key: string): any {
			for (var i = 0; i < values.length; i++) {
				if (key == values[i].Key)
					return values[i].Value;
			}
			return null;
		}
		
		// http://typescript.codeplex.com/discussions/463561
		public static getName(ent: any): string {
			if (typeof ent == "string") return ent;

			if (ent.constructor && ent.constructor.name != "Function") {
				return ent.constructor.name || (ent.toString().match(/function (.+?)\(/) || [, ''])[1];
			} else {
				return ent.name;
			}
		}

		// http://stackoverflow.com/questions/4775722/check-if-object-is-array
		public static isArray(ent: any): boolean {
			return Object.prototype.toString.call(ent) === '[object Array]';
		}
	}
}