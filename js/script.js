$(function(){
    mainInit();
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
})

function mainInit(){
    gnb_menu()
    searching()
    con2()
    con3()
    con4()
    con5()
    top_btn()
    flower()
    product_list()
    all_menu()
}



function gnb_menu(){
    let $gnbli = $('#header .nav > .gnb > li');
    let $subul = $('#header .nav .gnb > li > ul');
    let $header = $('#header');
    let arr = [245,0,85];
    
    $subul.css({height:0});


    $gnbli.hover(function(){
        let idx = $(this).index();
        $subul.stop().animate({height:0},400);
        $(this).find('ul').stop().animate({height:arr[idx]},400);
    })

    $header.on('mouseleave', function(){
        $subul.stop().animate({height:0},400);
    })

}

function searching(){
    let $search = $('#header .top-menu .search');
    let $sc = $('#header .top-menu .sc');
    let $visual = $('#visual');
    let $con = $('#container');
    let $footer = $('#footer');

    $search.hide();

    $sc.on('click',function(){
        $search.show();
    })

    $visual.on('click',function(){
        $search.hide();
    })
    $con.on('click',function(){
        $search.hide();
    })
    $footer.on('click',function(){
        $search.hide();
    })
}




function con2(){
    let $ul = $('.main .new-book ul');
    let $li = $('.main .new-book ul li');
    let $prev = $('.main .new-book .btn-wrap .prev');
    let $next = $('.main .new-book .btn-wrap .next');
    let first, last ;
    let timer = null , interval = 3000 , size = $li.width();


    timer = setInterval(make, interval);
    function make(){
        $ul.animate({left:'-=size'},400,function(){
            first = $('.main .new-book ul li:first');            
            $ul.append(first);
            $ul.css({marginLeft:'+=size'});
            $('.main .new-book ul li').removeClass('on');
            $('.main .new-book ul li:eq(2)').addClass('on');
        })
    }

    $li.last();
    $ul.prepend(last);
    $ul.css({left:'-=size'}); 


    $prev.on('click',function(){
        $ul.animate({marginLeft:'+=size'}, 400, function(){
            last = $('.main .new-book ul li:last');
            $ul.prepend(last);
            $ul.css({marginLeft:'-=size'});
            $('.main .new-book ul li').removeClass('on');
            $('.main .new-book ul li:eq(2)').addClass('on');
        })
        clearInterval(timer);
        timer = setInterval(make, interval);
    })


    $next.on('click',function(){
        $ul.animate({marginLeft:'-=size'},400,function(){
            first = $('.main .new-book ul li:first');
            $ul.append(first);
            $ul.css({marginLeft:'+=size'});
            $('.main .new-book ul li').removeClass('on');
            $('.main .new-book ul li:eq(2)').addClass('on');
        })
        clearInterval(timer);
        timer = setInterval(make, interval);
    })

}


function con3(){
    let $li = $('.main .premier .bg .award ul li');
    let $bookList = $('.main .premier .bg .book-list .list');
    let timer = null, interval = 4000, idx = 0;

    $bookList.eq(0).css({opacity:1});

    $li.on('click',function(){
        idx = $(this).index();
        $bookList.hide().css({opacity:0});
        $bookList.eq(idx).show().animate({opacity:1},600);
        $li.removeClass('on');
        $li.eq(idx).addClass('on');
    })
}

function con4(){
    let $ul = $('.main .group ul');
    let $li = $('.main .group ul li');
    let $mask = $('.main .group .inner')
    let w = 0, timer = null, interval = 0;
    w =$li.width();
    let ww  = 0;
    let size =  $li.width() * -52
    $mask.css('overflow','hidden');

    let cnt = 1
    setInterval(function(){        
        ww  = parseInt($ul.css('left')) ;
        if( ww < size ) {
            $ul.css({left: 0 })           
        }else {
            $ul.css({left:'-=' + cnt })
        }          
    },50)
}

function con5(){
    let $li = $('.main .contest .contest-box .contest-list li');
    let $detail = $('.main .contest .contest-box .details .text');
    let idx = 0;

    $detail.hide().eq(0).show();

    $li.on('click',function(){
        idx = $(this).index();

        $detail.hide().css({opacity:0});
        $detail.eq(idx).show().animate({opacity:1},600);

        $li.removeClass('on');
        $li.eq(idx).addClass('on');
    })

}


function top_btn(){
    let top = 0;
    $('.top-btn').hide();
    $(window).on('scroll', function(){
        top = $(this).scrollTop();                
        if(top>600){
            $('.top-btn').show();
        }else {
            $('.top-btn').hide();
        }
    })
    $('.top-btn').on('click',function(){
        $('html,body').animate({scrollTop:0}, 300)
    })
}

function flower(){
    let $candle = $('.main .candle .candle-img');
    let $flower1 = $('.main .candle .flower1');
    let $flower2 = $('.main .candle .flower2');
    let $flower3 = $('.main .candle .flower3');

    $candle.hover(function(){
        $flower1.stop().animate({left:300, bottom:160},1000);
        $flower2.stop().animate({right:210, bottom:-150},1000);
        $flower3.stop().animate({right:0, top:-40},1000);

    }, function(){
        $flower1.stop().animate({left:550, bottom:0},1000);
        $flower2.stop().animate({right:450, bottom:-250},1000);
        $flower3.stop().animate({right:-240, top:-340},1000);
    })
}


function product_list(){
    let $li = $('.main .product-list .pro-list > li');
    let $product = $('.main .product-list .product');
    let idx = 0;

    $product.eq(0).css({opacity:1});

    $li.on('click',function(){
        idx = $(this).index();
        $product.hide().css({opacity:0});
        $product.eq(idx).show().animate({opacity:1},600);
        $li.removeClass('on');
        $li.eq(idx).addClass('on');
    })
}

function all_menu(){
    let allMenu = document.querySelector('.all-menu');
        
        allMenu.addEventListener('click', function(e){
            e.target.classList.toggle('active');
        })
}