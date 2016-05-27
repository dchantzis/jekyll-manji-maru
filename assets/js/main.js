$(window).load(function() {

  $('.btn-close-info').on('click', function(){
    $(".mobile-info-toggle-box").prop( "checked", false );
  });

  $('.btn-close-nav').on('click', function(){
    $(".mobile-nav-toggle-box").prop( "checked", false );
  });

  $('.mobile-info-toggle-box').change(function() {
    if($(this).is(":checked")) {
      $(".mobile-nav-toggle-box").prop( "checked", false );
    }
  });

  $('.mobile-nav-toggle-box').change(function() {
    if($(this).is(":checked")) {
      $(".mobile-info-toggle-box").prop( "checked", false );
    }
  });
/*
  $('.main-nav li a').on('mouseenter',function(){
    var $this = $(this);

    $('.main-nav li').removeClass('js-submenu-active', function(){
      console.log($this.attr('class'));
      $this.parent().addClass('js-submenu-active');
    });

    if(0 == $('.js-submenu-active').length){
      $this.parent().addClass('js-submenu-active');
    }

  });

  $('.main-nav li.js-submenu-active .sub-main-nav').on('mouseleave', function(){
    var $this = $(this);
    console.log('a')
    $this.parent().removeClass('js-submenu-active');
  });
*/
/*
$('.main-nav li a').on('mouseenter', function(){
  //$('.main-nav li').removeClass('js-submenu-active');
$(this).parent().addClass('js-submenu-active');
});

$('.main-nav li .sub-main-nav ul').on('mouseleave', function(){
  if($(this).parent().parent().hasClass('js-submenu-active')){
    console.log('close');
$(this).parent().parent().removeClass('js-submenu-active');
}
});
*/


});
