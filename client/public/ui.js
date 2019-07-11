window.addEventListener('load', function () {

  // Convert all time outputs to local time
  function to_local_time(el_list) {
    var i;
    var today = (new Date()).toDateString();

    for (i = 0; i < el_list.length; i++) {
      try {
        var t_local_time = new Date(el_list[i].innerText);
        var t_date = t_local_time.toDateString() === today ? 'Today' : t_local_time.toLocaleDateString();
        var t_hours = t_local_time.getHours();
        var t_hours_12 = t_hours % 12;
        t_hours_12 = t_hours_12 || 12;
        var t_am_pm = t_hours >= 12 ? 'pm' : 'am';
        var t_minutes = t_local_time.getMinutes() < 10 ? '0' + t_local_time.getMinutes() : t_local_time.getMinutes();
        el_list[i].innerText = [
          t_date,
          ', ',
          t_hours_12,
          ':',
          t_minutes,
          ' ',
          t_am_pm].join('');
      } catch (e) {
        console.log('Error converting time to local timezone', e);
      }
    }
  }

  // Initiate local time conversion for all `<time>` DOM elements
  to_local_time(document.getElementsByTagName('time'));

});
