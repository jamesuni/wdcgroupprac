var jstz = require('jstz');
var timezone = jstz.determine();

function gettimezone() {
  return timezone.name();
}
