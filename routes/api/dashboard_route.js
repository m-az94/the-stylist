/* global DB */

const router = require('express').Router();
const DB = require('./db');
/**
 * Doctor's dashboard
 */
// router.get('/doctor', (req, res) => {
//   res.locals.user = { role: 'Doctor' };
//   res.json("testingDashboard")
// });

/**
 * Patient's dashboard
 */
router.get('/patient', (req, res) => {
  res.locals.user = { role: 'Patient' };
  // Render view only with meetings that were booked
  res.render('dashboard_patient', { meetings: DB.meetings_filter(true) });
});

module.exports = router;
