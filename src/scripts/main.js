(function(win, doc) {
    'use strict';

    $(document).ready(function(){
        var ipt = $('#all-choices');
        var iptPos = $('#index-pos');


        // On check au retour précédent si le nouveau choix est différent du précédent choix effectué sur la même étape
        /* $('.link-precedent').click(function(){
            var iptVal = ipt.val();
            var lastVal = iptVal.substring(iptVal.lastIndexOf(" ") + 1);

            $('#iptLastVal').val(lastVal);

            //console.log(lastVal);
        }); */

        $('.btn-go-to-step1').click(function(){
            $('[data-step]').not('[data-step="1"]').slideUp(400);
            $('[data-step="1"]').slideDown(400);

            ipt.val("");
            return false;
        });
        $('.btn-go-to-step2').click(function(){
            $('[data-step]').not('[data-step="2"]').slideUp(400);
            $('[data-step="2"]').slideDown(400);

            if(!$(this).hasClass('link-precedent')){
                /* if($('#iptLastVal').val() !== $(this).attr('data-choice')){
                    ipt.val(ipt.val() + ' ' + $(this).attr('data-choice'));
                } */
                ipt.val(ipt.val() + $(this).attr('data-choice'));
                $(this).parents('.col-choices').find('.active').removeClass('active');
                $(this).parents('.d-flex.justify-content-center').addClass('active');
            }
            return false;
        });
        $('.btn-go-to-step3').click(function(){
            $('[data-step]').not('[data-step="3"]').slideUp(400);
            $('[data-step="3"]').slideDown(400);

            if(!$(this).hasClass('link-precedent')){
                /* if($('#iptLastVal').val() !== $(this).attr('data-choice')){
                    ipt.val(ipt.val() + ' ' + $(this).attr('data-choice'));
                } */

                ipt.val(ipt.val() + ' ' + $(this).attr('data-choice'));

                $(this).parents('.col-choices').find('.active').removeClass('active');
                $(this).parents('.d-flex.justify-content-center').addClass('active');
            }
            return false;
        });
        $('.btn-go-to-step4').click(function(){
            $('[data-step]').not('[data-step="4"]').slideUp(400);
            $('[data-step="4"]').slideDown(400);

            if(!$(this).hasClass('link-precedent')){
                /* if($('#iptLastVal').val() !== $(this).attr('data-choice')){
                 ipt.val(ipt.val() + ' ' + $(this).attr('data-choice'));
                 } */

                ipt.val(ipt.val() + ' ' + $(this).attr('data-choice'));

                $(this).parents('.col-choices').find('.active').removeClass('active');
                $(this).parents('.d-flex.justify-content-center').addClass('active');
            }
            return false;
        });
        $('.btn-go-to-step5').click(function(){
            $('[data-step]').not('[data-step="5"]').slideUp(400);
            $('[data-step="5"]').slideDown(400);

            if(!$(this).hasClass('link-precedent')){
                if($('#iptLastVal').val() !== $(this).attr('data-choice')){
                    ipt.val(ipt.val() + ' ' + $(this).attr('data-choice'));
                }
                $(this).parents('.col-choices').find('.active').removeClass('active');
                $(this).parents('.d-flex.justify-content-center').addClass('active');
            }
            return false;
        });
        $('.btn-go-to-step6').click(function(){

            if(!$(this).hasClass('link-precedent')){
                /* if($('#iptLastVal').val() !== $(this).attr('data-choice')){
                 ipt.val(ipt.val() + ' ' + $(this).attr('data-choice'));
                 } */

                ipt.val(ipt.val() + ' ' + $(this).attr('data-choice'));
            }

            $('[data-step]').not('[data-step="6"]').slideUp(400);
            $('.wrapper-quizz[data-all-choices="' + ipt.val() + '"]').slideDown(400);
            return false;
        });
    });

})(window, document);