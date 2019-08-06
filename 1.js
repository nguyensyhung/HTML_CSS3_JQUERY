$(function(){
    blockdish = $('.alldish').isotope({
        // options
        itemSelector: '.onedish',
        layoutMode: 'masonry'
    });

    blockdish.imagesLoaded().progress( function() {
        blockdish.isotope('layout');
    });

    $('.titledetail a').click(function() {
        var dulieu = $(this).data('dish');
        // console.log(dulieu);
        blockdish.isotope({ filter: dulieu })
        return false;
    });
});