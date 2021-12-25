import _ from 'lodash';

/**
 * A class representing a set of HTML elements (grouped by same CLASS) that is hidden initially, and revealed once the screen has been sufficiently scrolled.
 * The user is responsibile for implementing the --visible and --hidden modifier css classes to the "elementsClass" param to specifiy how the reveal should be implemented.
 */
export default class ScrollReveal {
    /**
     * @param {String} elementsClass DOM class string representing the items to reveal on scroll. Reveal technicalities must be implemented outside of this class
     * @param {Number} thresholdPercent percentage of screen to be scrolled to before reveal. A value of 85 means once the hidden element reaches the BOTTOM 85% of the screen, it will be revealed.
     */
    constructor(elementsClass, thresholdPercent) {
        this.thresholdPercent = parseInt(thresholdPercent, 10);
        this.itemsToReveal = document.querySelectorAll(`.${elementsClass}`); // a nodeList containing elements that require scroll reveals
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = _.throttle(this.calcCaller, 200).bind(this);
        this.registerEvents();
    }

    registerEvents() {
        window.addEventListener("scroll", this.scrollThrottle);
    }

    calcCaller() {
        this.itemsToReveal.forEach(el => {
            if (!el.isReveal) {
                this.calculateIfScrolledTo(el);
            }
        })
    }

    calculateIfScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if (scrollPercent < this.thresholdPercent) {
                el.classList.add(`${elementsClass}--visible`);
                el.isRevealed = true;
                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add(`${elementsClass}--hidden`);
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
    }
}