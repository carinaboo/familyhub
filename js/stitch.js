$(document).ready(function(){
                  $('body > :not("#stitches")').hide();
                  $("#stitches").show();
                  
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
                  
                  });
