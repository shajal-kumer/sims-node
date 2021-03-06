const { body, validationResult, matchedData } = require('express-validator');

const teacherValidationRules = () => {
	return [
		body('full_name').trim().notEmpty().withMessage('Name is Required!').escape(),

		body('email')
			.trim()
			.notEmpty()
			.withMessage('Email is Required!')
			.isEmail()
			.withMessage('Email is not valid')
			.normalizeEmail(),
		body('password')
			.trim()
			.notEmpty()
			.withMessage('Password is Required!')
			.isLength({ min: 4 })
			.withMessage('Must be at least 4 chars'),
		body('phone')
			.trim()
			.notEmpty()
			.withMessage('Phone Number is Required!')
			.isInt()
			.toInt()
			.withMessage('Please enter a valid phone number')
			.escape(),

		body('address').trim().notEmpty().withMessage('Address is Required!').escape(),
		body('designation').trim().escape(),
		body('dob').trim(),
		body('joining_date').trim(),
		body('religion').trim().escape(),
		body('gender').trim().escape(),
		body('dept').trim().escape(),
		body('photo').trim().escape(),
	];
};

const teacherValidate = (req, res, next) => {
	const errors = validationResult(req);
	const matchedValue = matchedData(req);

	// console.dir(matchedValue);
	// console.dir(errors);

	if (errors.isEmpty()) {
		req.session.success = true;
		req.session.matchedValue = matchedValue;
		return next();
	}

	req.session.errors = errors.mapped();
	req.session.matchedValue = matchedValue;
	req.session.success = false;
	// if js disable then we need it
	res.redirect(req.originalUrl);
	return;
};
// student
const studentValidationRules = () => {
	return [
		body('student_first_name').trim().notEmpty().withMessage('First Name is Required!').escape(),
		body('student_last_name').trim().notEmpty().withMessage('Last Name is Required!').escape(),
		body('parent_first_name').trim().notEmpty().withMessage('Parent First Name is Required!').escape(),
		body('parent_last_name').trim().notEmpty().withMessage('Parent Last Name is Required!').escape(),
		body('parent_mobile')
			.trim()
			.notEmpty()
			.withMessage('Mobile Number is Required!')
			.isInt()
			.toInt()
			.withMessage('Please enter a valid mobile number')
			.escape(),

		body('_class').trim().notEmpty().withMessage('Class is Required!').escape(),
		body('section').trim().notEmpty().withMessage('Section is Required!').escape(),
		body('session').trim().notEmpty().withMessage('Session is Required!').escape(),
		body('registration_no').trim().notEmpty().withMessage('Registration No is Required!').escape(),
		body('roll_no')
			.trim()
			.notEmpty()
			.withMessage('Roll No is Required!')
			.isInt()
			.toInt()
			.withMessage('Please enter a valid Roll number')
			.escape(),
		body('student_dob').trim(),
		body('religion').trim().escape(),
		body('gender').trim().escape(),
		body('student_mobile').trim().escape(),
		body('student_email').trim().escape(),
		body('blood').trim().escape(),
		body('photo').trim().escape(),
		body('student_address').trim().escape(),
		body('remarks').trim().escape(),
		body('admission_no').trim().escape(),
		body('dept').trim().escape(),
		body('parent_email').trim().escape(),
		body('parent_address').trim().escape(),
		body('parent_occupation').trim().escape(),
	];
};

const studentValidate = (req, res, next) => {
	const errors = validationResult(req);
	const matchedValue = matchedData(req);

	console.dir(matchedValue);
	console.dir(errors);

	if (errors.isEmpty()) {
		req.session.success = true;
		req.session.matchedValue = matchedValue;
		return next();
	}

	req.session.errors = errors.mapped();
	req.session.matchedValue = matchedValue;
	req.session.success = false;
	// if js disable then we need it
	res.redirect(req.originalUrl);
	return;
};

// class
const classValidationRules = () => {
	return [
		body('class_name').trim().notEmpty().withMessage('Class Name is Required!').escape(),
		body('sections').notEmpty().withMessage('Please select at least one section!'),
	];
};

const classValidate = (req, res, next) => {
	const errors = validationResult(req);
	const matchedValue = matchedData(req);

	// console.dir(matchedValue);
	// console.dir(errors);

	if (errors.isEmpty()) {
		req.session.success = true;
		req.session.matchedValue = matchedValue;
		return next();
	}

	req.session.errors = errors.mapped();
	req.session.matchedValue = matchedValue;
	req.session.success = false;
	// if js disable then we need it
	res.redirect(req.originalUrl);
	return;
};

// Session
const sessionValidationRules = () => {
	return [body('session_name').trim().notEmpty().withMessage('Session Name is Required!').escape()];
};

const sessionValidate = (req, res, next) => {
	const errors = validationResult(req);
	const matchedValue = matchedData(req);

	// console.dir(matchedValue);
	// console.dir(errors);

	if (errors.isEmpty()) {
		req.session.success = true;
		req.session.matchedValue = matchedValue;
		return next();
	}

	req.session.errors = errors.mapped();
	req.session.matchedValue = matchedValue;
	req.session.success = false;
	// if js disable then we need it
	res.redirect(req.originalUrl);
	return;
};
// section
const sectionValidationRules = () => {
	return [body('section_name').trim().notEmpty().withMessage('Section Name is Required!').escape()];
};

const sectionValidate = (req, res, next) => {
	const errors = validationResult(req);
	const matchedValue = matchedData(req);

	// console.dir(matchedValue);
	// console.dir(errors);

	if (errors.isEmpty()) {
		req.session.success = true;
		req.session.matchedValue = matchedValue;
		return next();
	}

	req.session.errors = errors.mapped();
	req.session.matchedValue = matchedValue;
	req.session.success = false;
	// if js disable then we need it
	res.redirect(req.originalUrl);
	return;
};

// Dept
const deptValidationRules = () => {
	return [body('dept_name').trim().notEmpty().withMessage('Department Name is Required!').escape()];
};

const deptValidate = (req, res, next) => {
	const errors = validationResult(req);
	const matchedValue = matchedData(req);

	// console.dir(matchedValue);
	// console.dir(errors);

	if (errors.isEmpty()) {
		req.session.success = true;
		req.session.matchedValue = matchedValue;
		return next();
	}

	req.session.errors = errors.mapped();
	req.session.matchedValue = matchedValue;
	req.session.success = false;
	// if js disable then we need it
	res.redirect(req.originalUrl);
	return;
};

// Subject
const subjectValidationRules = () => {
	return [
		body('subject_name').trim().notEmpty().withMessage('Subject Name is Required!').escape(),
		body('class').notEmpty().withMessage('Class is Required!'),
	];
};

const subjectValidate = (req, res, next) => {
	const errors = validationResult(req);
	const matchedValue = matchedData(req);

	// console.dir(matchedValue);
	// console.dir(errors);

	if (errors.isEmpty()) {
		req.session.success = true;
		req.session.matchedValue = matchedValue;
		return next();
	}

	req.session.errors = errors.mapped();
	req.session.matchedValue = matchedValue;
	req.session.success = false;
	// if js disable then we need it
	res.redirect(req.originalUrl);
	return;
};

module.exports = {
	teacher: { teacherValidationRules, teacherValidate },
	student: { studentValidationRules, studentValidate },
	_class: { classValidationRules, classValidate },
	session: { sessionValidationRules, sessionValidate },
	dept: { deptValidationRules, deptValidate },
	subject: { subjectValidationRules, subjectValidate },
	section: { sectionValidationRules, sectionValidate },
};
