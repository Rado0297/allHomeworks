Function.prototype.extend = function (parent) {
	if (arguments.length > 1) {
		for (var i = 1; i < arguments.length; i += 1) {
			var name = arguments[i];
			this.prototype[name] = parent.prototype[name];
		}
	}
	else {
		for (var prop in parent.prototype) {
			if (parent.prototype.hasOwnProperty(prop)) {
				this.prototype[prop] = parent.prototype[prop];
			}
		}
	}
	return this;
}
function Publisher() { }
Publisher.prototype = {
	publish: function publish(data) {
		if (!this.subscribers) {
			return;
		}
		for (var i = 0; i < this.subscribers.length; i++) {
			this.subscribers[i](data);
		}
	},
	subscribe: function subscribe(handler) {
		if (!this.subscribers) {
			this.subscribers = [];
		}
		if (typeof handler !== 'function') {
			return;
		}
		this.subscribers.push(handler);
			return this;
	}
	};
//function,which set interval for bouncing
function Timer(interval) {
	var self = this;
	var timerId;
	//set interval of bouncing
	self.setInterval = function (newInterval) {
		interval = newInterval;
	}
	//start timer
	self.start = function () {
		if (!timerId) {
			timerId = setInterval(tick, interval);
		}
	}
	//stop timer
	self.stop = function () {
		if (timerId) {
			clearInterval(timerId);
			timerId = 0;
		}
	}
	//bouncing function
	function tick() {
		self.publish("tick");
	}
}
//extending Publisher function
Timer.extend(Publisher);