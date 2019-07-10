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
  // let m_list = DB.meetings_filter(false);
  DB.meetings_filter(res,false)
  // res.render('book_meeting', { meetings: [].concat(m_list.current, m_list.upcoming) });
});

/**
 * Handle form for booking appointment
 */
router.post('/book', (req, res) => {
  //let m = DB.meetings_get(parseInt(req.body.meeting_id));
  // if (m == null) {
  //   next();
  //   return;
  // };
  // m.booked = true;

  // // DB.meetings_put(m);
  // res.json(DB.meetings_put(m))
  // debug(`Booked meeting. ID: ${m.id}`, m);
  // res.redirect('/dashboard/patient');
DB.meetings_update(req.body.meeting_id,res)
  // res.json("testing")
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

  console.log(req.body.start_date)
  const start_time = new Date(req.body.start_date);
  const end_time = new Date(start_time.getTime() + (parseInt(req.body.duration) * 60000));
  const m = {
    // id: DB.meetings.length + 1,
    start_time: start_time,
    end_time: end_time,
    booked: false
  };

console.log(m)

  res.json(DB.meetings_put(m))
  // debug(`Created meeting. ID: ${m.id}`, m);
  // res.redirect('/dashboard/doctor')
});

/**
 * View for joining meeting
 */
router.get('/join/:meeting_id', (req, res, next) => {
  console.log(openTok)
  const id = req.params.meeting_id
  // const m = DB.meetings_get(parseInt(req.params.meeting_id));
  // if (m == null || !m.booked) {
  //   next();
  //   return;
  // }
  const embed_code = openTok.replace('DEFAULT_ROOM', `meeting${id}`);

  // if (!embed_code) {
  //   res.render('embed_not_set');
  //   return;
  // }

  // if (Date.parse(m.end_time) < Date.now()) {
  //   res.locals.meeting_over = true;
  // } else {
  //   res.locals.meeting_over = false;
  // }
  // res.render('meeting', { embed_code: embed_code, meeting: m });
  res.json({embed_code : embed_code})
});



router.get('/getMeetingClient', (req,res) => {
  // res.json("testing")
  // res.send({meetings: DB.meetings_filter()})
  console.log(DB.meetings_filter(res))
  // console.log({meetings: DB.meetings_filter()})
})

router.get('/getMeetingStylist', (req,res) => {
  // res.json("testing")
  // res.send({meetings: DB.meetings_filter()})
  console.log(DB.meetings_filter(res,true))
  // console.log({meetings: DB.meetings_filter()})
})

module.exports = router;
