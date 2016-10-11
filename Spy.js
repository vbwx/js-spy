// Spy JavaScript class
// Copyright (C) 2015 Bernhard Waldbrunner
/*
 *	This program is free software: you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation, either version 3 of the License, or
 *	(at your option) any later version.
 *
 *	This program is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *
 *	You should have received a copy of the GNU General Public License
 *	along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// ['unshift', 'shift', 'pop', 'push', 'splice', 'slice'].forEach(function(e) { Spy(someArray, e); });

(function(ns) {
	if (!ns.Spy) {
		var Spy = function(target, method) {
			if (this.constructor !== Spy)
				return new Spy(target, method);

			var fn = target[method], self = this;
			this.count = 0;
			target[method] = function() {
				ns.Spy.handler(target, method, count, new Error().stack);
				return fn.apply(target, [].slice.call(arguments));
			};
		};

		Spy.handler = function(target, method, count, stack) {
			console.log(stack);
		};

		ns.Spy = Spy;
	}
})(window);
