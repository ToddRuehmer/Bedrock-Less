/* Vars
========================================================== */
var KEYS = {
    esc: 27
}
var VARS = {
    docHeight: 0,
    windowHeight: 0,
    windowWidth: 0,
    tabletLandscape: 1024,
    tabletPortrait: 768,
    mobile: 500,
    containerWidth: 0,
    scrollTop: 0,
    touch: $('html.touch').length > 0
};

// Set Proportions
var proportions = {
    $doc: Object,
    $window: Object,
    $container: Object,
    init: function () {
        this.$doc = $(document);
        this.$window = $(window);
        this.$container = $('.inner').first();
        this.run();
    },
    run: function () {
        var self = this;

        self.scrollTop();

        self.adjust(self);
        $(window).resize(function () {
            self.adjust(self);
        });
    },
    adjust: function (self) {
        VARS.docHeight = self.$doc.height();
        VARS.windowHeight = self.$window.height();
        VARS.windowWidth = self.$window.width();
        VARS.containerWidth = self.$container.width();
    },
    scrollTop: function () {
        VARS.scrollTop = window.pageYOffset;
        window.requestAnimationFrame(proportions.scrollTop);
    }
}


/* Homemade Plugins
========================================================== */
//CSS Transform Shorthand
$.fn.transform = function (properties) {
    this.css({
        '-ms-transform': properties,
        '-moz-transform': properties,
        '-webkit-transform': properties,
        '-o-transform': properties,
        'transform': properties
    });
};

//Scrolling Links
$.fn.scrollLink = function (e) {
    this.on('click', function (e) {
        e.preventDefault();

        var offset = $($(this).attr('href')).offset().top;
        $('html,body').animate({ scrollTop: offset - 100 }, 500);
    });
};


/* Mobile Nav
========================================================== */
function MobileNav(el, i) {
    if (!(this instanceof MobileNav)) {
        return new MobileNav(el);
    }
    var self = this;
        self.$trigger = $('.js-MenuTrigger'),
        self.$nav = $('.js-MobileNavigation'),
        self.$close = self.$nav.find('.js-Close');

    //Toggle Menu
    self.$trigger.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        self.$nav.toggleClass('MG-v-Active');
        $('body').toggleClass('MG-v-Fixed');
    });

    //Close Button
    self.$close.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        self.$nav.removeClass('MG-v-Active');
        $('body').removeClass('MG-v-Fixed');
    });

    //Body Click
    $('body').on('click', function(e) {

        self.$nav.removeClass('MG-v-Active');
        $('body').removeClass('MG-v-Fixed');
    });

    self.$nav.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();    
    });
}
MobileNav.prototype = {
};


/* Accordions
========================================================== */
function Accordion(el, i) {
    if (!(this instanceof Accordion)) {
        return new Accordion(el);
    }
    var self = this
        self.$container = $(el),
        self.$triggers = self.$container.children('li');
        self.$panels = self.$triggers.children('ul');

    $.each(self.$triggers, function(){
        this.open = false;
    });

    self.$triggers.on('click', function(e){
        e.preventDefault();
        
        if(this.open == false) {
            self.slideDown(self.$triggers.index(this));
        } else {
            self.slideUp(self.$triggers.index(this));
        }
    });

    self.$panels.on('click', function(e){
        e.stopPropagation();
    });
}
Accordion.prototype = {
    slideDown: function(index){
        var self = this;

        self.$triggers.eq(index).addClass('MG-m-Active');
        self.$panels.eq(index).slideDown();
        self.$triggers[index].open = true;
    },
    slideUp: function(index){
        var self = this;

        self.$triggers.eq(index).removeClass('MG-m-Active');
        self.$panels.eq(index).slideUp();
        self.$triggers[index].open = false;
    }
};


/* Initialize
========================================================== */
function construct(sel, cons) {
    return $(sel).toArray().map(cons);
}

var main = {
    init: function() {
        proportions.init();
        $(window).resize(function () { proportions.adjust });
        this.Accordions = construct('.MG-m-Accordion', Accordion);
        this.StickyNav = new StickyNav();
        this.MobileNav = new MobileNav();
    }
};

// Everything
main.init();