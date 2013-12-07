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
                                          $('body > :not("#reorder")').hide();
                                          $("#choose_pictures").show();
                                          });
                  
                  });