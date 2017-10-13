var reservations = [
	{
		name: "Goober",
		phone: "800-999-8888",
		email: "goober@goobers.net",
		id: "asdf"
	}, 
	{
		name: "Hannah",
		phone: "858-471-8948",
		email: "hannah@goobers.net",
		id: "saghjk"
	},
	{
		name: "Gooey",
		phone: "800-999-6565",
		email: "gooey@goobers.net",
		id: "75"
	},
	{
		name: "Linda",
		phone: "861-959-8888",
		email: "lgirl@goobers.net",
		id: "bbb"
	},
	{
		name: "Fork",
		phone: "911",
		email: "fork@kitchen.com",
		id: "f99"
	},
	{
		name: "Uber",
		phone: "800-852-8888",
		email: "uber@goobers.net",
		id: "uber7"
	}
];

function currentReservations() {
	var first5 = [];
	for (var i = 0; i < reservations.length; i++) {
		if (i === 5) {
			break;
		} else {
			first5.push(reservations[i]);
		}
	}
	return first5;
}

function waitList() {
	var waitlist = [];
	for (var i = 5; i < reservations.length; i++) {
		waitlist.push(reservations[i]);
	}
	return waitlist;
}

module.exports = {
	reservations: reservations,
	currentReservations: currentReservations,
	waitList: waitList
};