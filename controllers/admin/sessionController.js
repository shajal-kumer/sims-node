const Session = require('../../models/admin/sessionModel');
module.exports = {
	session_index: async (req, res) => {
		try {
			const sessions = await Session.find().sort({ name: 'asc' }).lean();
			if (sessions.length == 0) {
				return res.render('admin/session', {
					error: 'No session added! Please add session',
				});
			}
			res.status(200).render('admin/session', { sessions });
		} catch (err) {
			console.log(err);
			res.status(500).render('error/500');
		}
	},
	session_details: async (req, res) => {
		const id = req.params.id;
		try {
			const session = await Session.findById(id).lean();
			if (session == null) {
				req.flash('errorMessage', 'No session found for Edit!');
				return res.redirect('admin/session');
			}
			res.status(200).json(session);
		} catch (err) {
			console.log(err);
			res.render('error/500');
		}
	},
	session_update: async (req, res) => {
		const { _id, name } = req.body;
		try {
			const session = await Session.findById(_id);
			if (session == null) {
				req.flash('errorMessage', 'No session found for Edit!');
				return res.redirect('/session');
			}
			session.name = name;
			await session.save();
			req.flash('successMessage', `Successfully edited session`);
			res.status(302).redirect('/session');
		} catch (err) {
			console.log(err);
			res.status(500).render('error/500');
		}
	},
	session_delete: async (req, res) => {
		const id = req.params.id;
		try {
			const session = await Session.findByIdAndDelete(id);
			if (session == null) {
				req.flash('errorMessage', 'No session found for Delete!');
				return res.json({ url: '/session', deletedSession: null });
			}
			req.flash('errorMessage', `Successfully deleted session`);
			res.status(200).json({ url: '/session', deletedSession: session });
		} catch (err) {
			console.log(err);
			res.status(500).render('error/500');
		}
	},
	session_create: async (req, res) => {
		let session = new Session({
			name: req.body.name,
		});
		try {
			session = await session.save();
			req.flash('successMessage', `Successfully added session`);
			res.redirect('/session');
		} catch (err) {
			console.log(err);
			res.status(500).render('error/500');
		}
	},
};