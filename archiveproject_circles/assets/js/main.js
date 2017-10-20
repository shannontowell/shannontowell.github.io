$(document).ready(function() {
// document or window, doc loads at the same time as everything. Window waits until all the content is loaded.

// Add jQuery here


$('.nav_decor').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.decor').removeClass('hide');
  $('.item.decor').addClass('show');
});


$('.nav_flowers').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.flowers').removeClass('hide');
  $('.item.flowers').addClass('show');
});


$('.nav_food').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.food').removeClass('hide');
  $('.item.food').addClass('show');
});


$('.nav_furniture').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.furniture').removeClass('hide');
  $('.item.furniture').addClass('show');
});

$('.nav_living').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.living').removeClass('hide');
  $('.item.living').addClass('show');
});

$('.nav_shiny').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.shiny').removeClass('hide');
  $('.item.shiny').addClass('show');
});

$('.nav_sports').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.sports').removeClass('hide');
  $('.item.sports').addClass('show');
});

$('.nav_tech').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.tech').removeClass('hide');
  $('.item.tech').addClass('show');
});

// remove all filters
$('.nav_all').click(function(event) {
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});




// lightbox

// $('.item').click(function(event) {
//   $(this).toggleClass('lightbox');
// });













  });
