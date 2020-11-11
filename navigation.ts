// navigation
$('.nav li:has(ul)')
  .addClass('has-subnav')
  .each(function(){
    var $li = $(this)
    , $a = $('> a', $li);

    $a.on('mouseenter', function(){
      $li.addClass('active');
    });
    $li.on('mouseleave', function(){
      $li.removeClass('active');
    });
  });