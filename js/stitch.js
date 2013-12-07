$(document).ready(function(){
                  $('content > :not("#stitches")').hide();
                  $("#stitches").show();
                  
                  $("#stitches_next").click(function(){
                                       $('content > :not("#choose_pictures")').hide();
                                       $("#choose_pictures").show();
                                       });
                  
                  $("#choose_back").click(function(){
                                            $('content > :not("#stitches")').hide();
                                            $("#stitches").show();
                                            });
                  });