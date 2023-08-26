function messageAt404(req, res) {
	return res.status(404).json({ code: '404', message: "Page not found" });
}

module.exports = messageAt404;
