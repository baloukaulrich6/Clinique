(function($) {
    $(document).ready(function(){
        $(".bloc_slider_images").slick({
            'slidesToShow': 2.5,
            'slidesToScroll': 1,
            'arrows': false,
            'dots': false,
            'infinite': false,
            'initialSlide': 1,
            'responsive':[
                {
                    breakpoint: 768,
                    settings: {
                        'slidesToShow': 1.3,
                        'initialSlide': 0
                    }
                }
            ]
        });

        $(".bloc_etapes .bloc_etapes_etapes").slick({
            'slidesToShow': 1,
            'infinite': false,
            'arrows': true,
            'dots': true,
            'appendDots': $(".bloc_etapes_nav"),
            customPaging: function(slider, i) {
                i = i + 1;
                return $('<span />').text("etape " + i);
            },
        });
        $('.bloc_etapes .bloc_etapes_etapes').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $(".bloc_etapes_nav").attr("data-etape", nextSlide);
        });
        $(".bloc_etapes .bloc_etapes_etapes .etape .etape_next").click(function(){
            $(".bloc_etapes .bloc_etapes_etapes").slick("slickNext");
        });

        $(".bloc_traitements .bloc_traitements_questions").click(function(){
            $('html, body').animate({
                scrollTop: $(".bloc_questions").offset().top
            }, 1000);
        });

        
        if($(window).width() > 768){
            $(".dnSlide-main").dnSlide({
                "isOddShow" : false,
                "autoPlay"  : false,
                "scale"     : 0.8,
                "speed"     : 500,
                "verticalAlign" : "middle",
                "afterClickBtnFn" : null
            });
            $(".bloc_besoins_slider .dnSlide-item").each(function(index){
                $(this).addClass("besoin_" + index);
            });
        }
        else{
            $(".bloc_besoins_slider").removeClass("dnSlide-main");
            $(".bloc_besoins_slider").slick({
                'infinite': true,
                'slidesToShow': 1,
                'centerMode': true,
                'centerPadding': '80px'
            });
        }




        $(".bloc_reseaux .bloc_reseaux_tabs .tab_reseau_right").each(function(){
            var slider = $(this);
            slider.slick({
                'slidesToShow': 2.7,
                'infinite': false,
                'arrows': true,
                'prevArrow': slider.siblings('.tab_reseau_left').find(".slick-prev"),
                'nextArrow': slider.siblings('.tab_reseau_left').find(".slick-next"),
                'draggable': false,
                'responsive':[
                    {
                        breakpoint: 768,
                        settings: {
                            'slidesToShow': 1.5,
                        }
                    }
                ]
            });
        });
        $(".bloc_reseaux .bloc_reseaux_nav .reseau_nav").click(function(){
            var reseau = $(this).attr("data-reseau");
            $(".bloc_reseaux .bloc_reseaux_nav .reseau_nav").removeClass("active");
            $(this).addClass("active");
            $(".bloc_reseaux .bloc_reseaux_tabs .bloc_reseau").removeClass("active");
            $(".bloc_reseaux .bloc_reseaux_tabs #" + reseau).addClass("active");
        });
        $(".bloc_reseaux .bloc_reseaux_tabs .tab_reseau_slide .video_play").click(function(){
            $(this).siblings("video").trigger('play');
            $(this).hide();
            $(this).siblings(".video_pause").show();
        });
        $(".bloc_reseaux .bloc_reseaux_tabs .tab_reseau_slide .video_pause").click(function(){
            $(this).siblings("video").trigger('pause');
            $(this).hide();
            $(this).siblings(".video_play").show();
        });

        $(".bloc_slider_marques").slick({
            'slidesToShow': 3,
            'infinite': false,
            'arrows': false,
            'mobileFirst': true,
            'responsive':[
                {
                    breakpoint: 992,
                    settings: 'unslick'
                }
            ]
        });

        $(".bloc_avant_apres .bloc_avant_apres_content").slick({
            'slidesToShow': 1,
            'infinite': false,
            'arrows': false,
            'dots': true,
            'mobileFirst': true,
            'responsive':[
                {
                    breakpoint: 992,
                    settings: 'unslick'
                },
                {
                    breakpoint: 768,
                    settings: {
                        'slidesToShow': 2
                    }
                }
            ]
        });

        $("#footer .footer_menus #toggle_footer_menus").click(function(){
            $(this).hide();
            $("#footer .footer_menus .footer_menu").addClass("active");
        });

        $(".listing_slider_traitements .listing_slider_traitements_content").slick({
            'slidesToShow': 2.5,
            'slidesToScroll': 1,
            'arrows': false,
            'dots': false,
            'infinite': false,
            'initialSlide': 1,
            'responsive':[
                {
                    breakpoint: 768,
                    settings: {
                        'slidesToShow': 1.2,
                        'initialSlide': 0,
                        'dots': true
                    }
                }
            ]
        });

        var $status = $(".listing_bloc_avant_apres .listing_avant_apres_dots");
        var $slickElement = $(".listing_bloc_avant_apres .listing_avant_apres_content");

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/ ' + slick.slideCount);
        });
        $(".listing_bloc_avant_apres .listing_avant_apres_content").slick({
            'slidesToShow': 1,
            'slidesToScroll': 1,
            'infinite': false,
            'responsive':[
                {
                    breakpoint: 992,
                    settings: {
                        'arrows': false,
                        'dots': true
                    }
                }
              
            ]
        });

        $(".listing_bloc_onglets .listing_onglets_nav").click(function(){
            tab = $(this).attr("data-onglet");
            $(".listing_bloc_onglets .listing_onglets_nav").removeClass("active");
            $(this).addClass("active");
            $(".listing_bloc_onglets .listing_onglets_tab").removeClass("active");
            $(".listing_bloc_onglets .listing_onglets_tab#" + tab).addClass("active");
        });
        $(".listing_bloc_onglets .listing_onglets_nav_mobile").click(function(){
            tab = $(this).attr("data-onglet");
            if($(this).hasClass("active")){
                $(".listing_bloc_onglets .listing_onglets_nav_mobile").removeClass("active");
            }
            else{
                $(".listing_bloc_onglets .listing_onglets_nav_mobile").removeClass("active");
                $(this).addClass("active");
            }
            $(".listing_bloc_onglets .listing_onglets_tab:not(#" + tab + ")").slideUp();
            $(".listing_bloc_onglets .listing_onglets_tab#" + tab).slideToggle();
        });

        $(".listing_bloc_onglets .listing_onglet_liste_images.parent_Traitements").slick({
            'slidesToShow': 2.2,
            'infinite': false,
            'arrows': false,
            'dots': true,
            'mobileFirst': true,
            'responsive':[
                {
                    breakpoint: 992,
                    settings: 'unslick'
                }, 
                {
                    breakpoint: 768,
                    settings: {
                        'slidesToShow': 3.2
                    }
                }
              
            ]
        });

        $(".listing_bloc_etapes .etape .etape_title").click(function(){
            if(!$(this).parent().hasClass("active")){
                $(".listing_bloc_etapes .etape.active .etape_desc").slideUp();
                $(".listing_bloc_etapes .etape.active").removeClass("active");
            }
            $(this).parent().toggleClass("active");
            var etape = $(this).next();
            etape.slideToggle();
        });

        $(".listing_slider_videos .listing_slider_videos_right").slick({
            'slidesToShow': 2.75,
            'slidesToScroll': 1,
            'infinite': false,
            'prevArrow': $('.listing_slider_videos_arrows').find(".slick-prev"),
            'nextArrow': $('.listing_slider_videos_arrows').find(".slick-next"),
            'responsive':[
                {
                    breakpoint: 720,
                    settings: {
                        'slidesToShow': 1.5
                    }
                }
              
            ]
        });

        $(".listing_slider_videos .video .video_play").click(function(){
            $(this).siblings("video").get(0).play();
        });

        $(".listing_bloc_faq .question").click(function(){
            $(this).toggleClass("active");
            $(this).siblings().slideToggle();
        });

        $(".listing_bandeau_images .listing_bandeau_images_content").slick({
            'slidesToShow': 1.5,
            'infinite': false,
            'arrows': false,
            'dots': true,
            'mobileFirst': true,
            'responsive':[
                {
                    breakpoint: 992,
                    settings: 'unslick'
                }, 
                {
                    breakpoint: 768,
                    settings: {
                        'slidesToShow': 2.5
                    }
                }
            ]
        });

        $(".listing_bloc_tarifs").next(".bloc_questions").addClass("no_background");

        $(".listing_bloc_accordeon .accordeon .accordeon_title").click(function(){
            $(this).parent().toggleClass("active");
            $(this).siblings().slideToggle();
        });

        $(".clinique_bloc_header .clinique_bloc_header_slider").slick({
            'slidesToShow': 2.33,
            'slidesToScroll': 1,
            'arrows': false,
            'dots': false,
            'infinite': false,
            'initialSlide': 1,
            'responsive':[
                {
                    breakpoint: 768,
                    settings: {
                        'slidesToShow': 1.3,
                        'initialSlide': 0
                    }
                }
            ]
        });

        $(".clinique_bloc_savoir_faire .clinique_bloc_savoir_faire_slider").slick({
            'slidesToShow': 3,
            'slidesToScroll': 1,
            'infinite': false,
            'responsive':[
                {
                    breakpoint: 768,
                    settings: {
                        'slidesToShow': 1.2,
                        'arrows': false,
                        'dots': true
                    }
                }
            ]
        });

        $(".clinique_bloc_fondateur .equipe_membre .equipe_membre_btn_popup").click(function(){
            $(this).closest(".equipe_membre").find(".equipe_membre_popup, .equipe_membre_popup_overlay").addClass("active");
            $("body").addClass("no-scroll");
        });
        $(".clinique_bloc_fondateur .equipe_membre .equipe_membre_popup_close").click(function(){
            $(this).closest(".equipe_membre_popup").removeClass("active");
            $(this).closest(".equipe_membre_popup").siblings(".equipe_membre_popup_overlay").removeClass("active");
            $("body").removeClass("no-scroll");
        });

        $(".clinique_bloc_equipe .clinique_bloc_equipe_slider").slick({
            'slidesToShow': 3.7,
            'slidesToScroll': 1,
            'arrows': false,
            'dots': false,
            'infinite': false,
            'responsive':[
                {
                    breakpoint: 992,
                    settings: {
                        'slidesToShow': 2.8
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        'slidesToShow': 1.3,
                        'dots': true
                    }
                }
            ]
        });

        $(".clinique_bloc_aide .clinique_bloc_aide_slider").slick({
            'slidesToShow': 1.5,
            'infinite': false,
            'arrows': false,
            'dots': true,
            'mobileFirst': true,
            'responsive':[
                {
                    breakpoint: 992,
                    settings: 'unslick'
                }, 
                {
                    breakpoint: 768,
                    settings: {
                        'slidesToShow': 2.5
                    }
                }
            ]
        });

        var tags = [];
        $(".category_filters .filter_tag").click(function(){
            $(this).toggleClass("active");
            var tag = $(this).attr("data-tag");
            if($(this).hasClass("active")){
                tags.push(tag);
            }
            else{
                var index = tags.indexOf(tag);
                if (index !== -1) {
                    tags.splice(index, 1);
                }
            }
            $(".blog_listing_articles article").hide();
            tags.forEach(function(item){
                $(".blog_listing_articles article.tag-" + item).show();
            });
        });
        $(".category_filters .category_filters_delete").click(function(){
            $(".category_filters .filter_tag").removeClass("active");
            $(".blog_listing_articles article").show();
        });

        $(".post_bloc_rapport .post_bloc_rapport_left").slick({
            'slidesToShow': 2.2,
            'infinite': false,
            'arrows': false,
            'dots': true,
            'mobileFirst': true,
            'responsive':[
                {
                    breakpoint: 992,
                    settings: 'unslick'
                }
            ]
        });

        revuePressePagination();

        $(".tarifs_accordeon .tarifs_accordeon_title").click(function(){
            $(this).siblings(".tarifs_accordeon_content").slideToggle();
            $(this).toggleClass("active");
        });

        if($(window).width() < 992){
            $(".category_top .category_filters_title").click(function(){
                $(".category_top .category_filters_title").toggleClass("active");
                $(".category_top .category_filters").slideToggle();
            });
        }
        
        if($(window).width() > 992){
            var contact_img_size = $(".contact_bloc_images img.contact_img_2").height();
            $(".contact_bloc_content_right").css("margin-top", (contact_img_size - (40/100*contact_img_size)) - 166);
        }
    });

    $(window).resize(function(){
        if($(window).width() < 992){
            if($("#masthead .header_banner .banniere_right").length){
                $("#masthead .header_banner .banniere_right").appendTo(".max-mega-menu");
            }
        }
        else{
            if($("#masthead .max-mega-menu .banniere_right").length){
                $("#masthead .max-mega-menu .banniere_right").appendTo("#masthead .header_banner");
            }
        }

        if($(window).width() > 992){
            var contact_img_size = $(".contact_bloc_images img:last-child").height();
            $(".contact_bloc_content_right").css("margin-top", (contact_img_size - (40/100*contact_img_size)) - 166);
        }
    });

    $(window).scroll(function(){
        if($(window).width() < 992){
            if ($(window).scrollTop() > 42){
                $('.header_main, #page').addClass("sticky");
            }
            else{
                $('.header_main, #page').removeClass("sticky");
            }
        }
    });

    function revuePressePagination(){
        var offset = parseInt($(".blog_listing_articles").attr("data-per-page"));
        var max_art = parseInt($(".blog_listing_articles").attr("data-max-art"));
        $('.load-more').click(function() {
            var button = $(this);
            var category = button.data('category');
            $.ajax({
                url : '../../wp-admin/admin-ajax.php',
                type : 'post',
                data : {
                    action : 'load_posts',
                    category : category,
                    offset : offset
                },
                beforeSend : function () {
                    button.addClass("disabled");
                },
                success : function( response ) {
                    if( response ) {
                        button.removeClass("disabled");
                        $('.blog_listing_articles').append(response);
                        offset += response.length;
                        $(".current_art").text(offset);
                        if(offset == max_art){
                            button.hide();
                        }
                    }
                }
            });
        });
    }
})(jQuery);