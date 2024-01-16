import{ reactive } from 'vue';

export const store = reactive({
    isHidden: false,
    scrollTimeout: null,
    lastScrollPosition: 0,
    isSCrolled: false,
    navScrollHideDelay: 1500, 
    navScroll() {
        this.isHidden = false;
        
        if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
        }

        this.scrollTimeout = setTimeout(() => {
            this.isHidden = true;
        }, this.navScrollHideDelay);
    },

    setupScrollListener() {
        window.addEventListener('scroll', this.navScroll);
    },
    removeScrollListener() {
        window.removeEventListener('scroll', this.navScroll);
    },
})