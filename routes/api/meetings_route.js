/* global DB */

const router = require('express').Router();
const debug = require('util').debuglog('app');
const DB = require('./db');
require("dotenv").config();

let openTok = process.env.openTok
/**
 * Render page for booking appointments
 */
router.get('/book', (req, res) => {
  res.locals.user = { role: 'Patient' };
  DB.meetings_filter(res,false)
});

/**
 * Handle form for booking appointment
 */
router.post('/book', (req, res) => {
DB.meetings_update(req.body.meeting_id,res)
});

/**
 * View for creating meeting
 */
router.get('/create', (req, res) => {
  res.locals.assets.styles.push('flatpickr.min.css');
  res.locals.assets.scripts.push('flatpickr.min.js');
  res.locals.assets.scripts.push('scheduling_ui.js');
  res.locals.user = { role: 'Doctor' };
  res.render('create_meeting');
});

/**
 * Handle POST request to create new meeeting
 */
router.post('/create', (req, res) => {

  console.log(req.body)
  const start_time = new Date(req.body.start_date);
  const end_time = new Date(start_time.getTime() + (parseInt(req.body.duration) * 60000));
  const m = {
    start_time: start_time,
    end_time: end_time,
    booked: false
  };

console.log(m)

  res.json(DB.meetings_put(m))
});

/**
 * View for joining meeting
 */
router.get('/join/:meeting_id', (req, res, next) => {
  console.log(openTok)
  const id = req.params.meeting_id
  const embed_code = openTok.replace('DEFAULT_ROOM', `meeting${id}`);
  res.json({embed_code : embed_code})
});



router.get('/getMeetingClient', (req,res) => {
  console.log(DB.meetings_filter(res))
})

router.get('/getMeetingStylist', (req,res) => {
  console.log(DB.meetings_filter(res,true))
})

module.exports = router;
