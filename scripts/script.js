$(function() {
    $('.tabs-nav a').click(function() {
  
      $('.tabs-nav li').removeClass('active');
      $(this).parent().addClass('active');
  
      let currentTab = $(this).attr('href');
      $('.tabs-content div').hide();
      $(currentTab).show();
  
      return false;
    });
  });