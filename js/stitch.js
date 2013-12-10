var record = true;
var pictures = new Array();
pictures[0] = 'url("images/maui_2.jpg")';
pictures[1] = 'url("images/maui_3.jpg")';
pictures[2] = 'url("images/maui_4.jpg")';
pictures[3] = 'url("images/maui_1.jpg")';
var index = 0;

/*$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "#slideshow" ).on( "swipe", swipeHandler );
  
  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
    while (index < 4){
        $(#slideshow).css('background-image', pictures[index]);
        index++;
    }
  }
});*/

$(function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
  
  $( "#sortable" ).bind( "sortstop", function(event, ui) {
                        $('#sortable').listview('refresh');
                        });
  });



$(document).ready(function(){
                  $('body > :not("#stitches")').hide();
                  $("#stitches").show();
                  $("#toast").show();
                  
                  $("#stitches_next").click(function(){
                                       $('body > :not("#choose_pictures")').hide();
                                       $("#choose_pictures").show();
                                       });
                  
                  $("#choose_back").click(function(){
                                            $('body > :not("#stitches")').hide();
                                            $("#stitches").show();
                                            });
                  
                  $("#choose_next").click(function(){
                                            $('body > :not("#reorder_pictures")').hide();
                                            $("#reorder_pictures").show();
                                            });
                  
                  $("#reorder_back").click(function(){
                                          $('body > :not("#choose_pictures")').hide();
                                          $("#choose_pictures").show();
                                          });
                  
                  $("#reorder_next").click(function(){
                                          $('body > :not("#voiceover")').hide();
                                          $("#voiceover").show();
                                          });
                  
                  $("#voiceover_back").click(function(){
                                           $('body > :not("#reorder_pictures")').hide();
                                           $("#reorder_pictures").show();
                                           });

                  $("#voiceover_next").click(function(){
                                           $('body > :not("#set_title_and_music")').hide();
                                           $("#set_title_and_music").show();
                                           });

                  $("#set_title_back").click(function(){
                                           $('body > :not("#voiceover")').hide();
                                           $("#voiceover").show();
                                           });
                  
                  $("#set_title_next").click(function(){
                                             $('body > :not("#review")').hide();
                                             $("#review").show();
                                             });
                  
                  $("#review_back").click(function(){
                                             $('body > :not("#set_title_and_music")').hide();
                                             $("#set_title_and_music").show();
                                             });

                  $("#review_next").click(function(){
                                          $('body > :not("#share")').hide();
                                          $("#share").show();
                                          });
                  $("#share_back").click(function(){
                                          $('body > :not("#review")').hide();
                                          $("#review").show();
                                          });
                  $("#share_next").click(function(){
                                          $('body > :not("#stitches")').hide();
                                          $("#stitches").show();
                                          $('.toast').fadeIn(400).delay(3000).fadeOut(400);
                                          });

                  $('#choose_pictures img').click(function() {
                    $(this).toggleClass('highlighted');  
                    });

                  $('.song').click(function() {
                    $('.song').removeClass('selected_song');
                    $(this).addClass('selected_song');
                    });

                  $('.family').click(function() {
                    $(this).toggleClass('family_selected');
                    });
                  
                  $('#record').click(function() {
                                     if (record == true) {
                                        $('#record').css('background-image', 'url("images/pause.png")');
                                        record = false;
                                     } else {
                                        $('#record').css('background-image', 'url("images/record.png")');
                                        record = true;
                                     }
                                });
                  });
