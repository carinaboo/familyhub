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
                  $("#share_before").click(function(){
                                          $('body > :not("#review")').hide();
                                          $("#review").show();
                                          });
                  $("#share_next").click(function(){
                                          $('body > :not("#stitches")').hide();
                                          $("#stitches").show();
                                          });

                  $('#choose_pictures img').click(function() {
                    $(this).toggleClass('highlighted');  
                    });

                  $('.song').click(function() {
                    $('.song').removeClass('selected_song');
                    $(this).addClass('selected_song');
                    });

                  });
