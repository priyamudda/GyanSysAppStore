(function(e){var t=null;e.fn.isOnline=function(n){function i(n){e.ajax({url:n.url,cache:false,async:false,type:"HEAD"}).done(function(e){t=true}).fail(function(e){t=false}).always(function(){});return t}n=n||{};n.url=n.url||window.location.href;n.msg=n.msg||"No Internet connection detected ";return i(n)}})(jQuery)