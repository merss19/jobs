import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

$(document).ready(function(){
   let btn= $('.drop-btn'),
        list = $('.drop-menu');
        btn.on('click',function(){
            list.slideToggle('slow');
        });
});