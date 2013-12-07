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
                  });
