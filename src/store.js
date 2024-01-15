import{ reactive } from 'vue';

export const store = reactive({ 
    isScrolled: false,
    isHidden: true,
    lastScrollPosition:0,
        navScroll(){
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
            this.isScrolled= currentScrollPosition>0;
            this.isHidden= currentScrollPosition>this.lastScrollPosition&& currentScrollPosition > 200;

            this.lastScrollPosition= currentScrollPosition
              
        }
        setupScrollListener() {
            window.addEventListener('scroll', this.navScroll);
        },
        removeScrollListener() {
            window.removeEventListener('scroll', this.navScroll);
        },
    
    
   
}) 