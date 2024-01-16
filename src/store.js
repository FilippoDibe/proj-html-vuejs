import { ref, watch } from 'vue';

export const isScrolled = ref(false);
export const isHidden = ref(false);
export const isTransparent = ref(true); 


var lastScrollPosition = 0;
var hideTimeout;


function navScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    isScrolled.value = currentScrollPosition > 0;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        isScrolled.value = true;
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            isHidden.value = true;
        }, 1500);
        isTransparent.value = true; 
    } else {
        isScrolled.value = false;
        clearTimeout(hideTimeout);
        isHidden.value = false;
        isTransparent.value = currentScrollPosition === 0; 
    }

    lastScrollPosition = currentScrollPosition;
}


watch(() => {
    window.addEventListener('scroll', navScroll);
});

export function setupScrollListener() {
    window.addEventListener('scroll', navScroll);
}

export function removeScrollListener() {
    window.removeEventListener('scroll', navScroll);
}
