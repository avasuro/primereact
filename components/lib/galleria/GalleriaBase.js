import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    header: 'p-galleria-header',
    footer: 'p-galleria-footer',
    closeIcon: 'p-galleria-close-icon',
    closeButton: 'p-galleria-close p-link',
    root: ({ props, context, thumbnailsPosClassName, indicatorPosClassName }) =>
        classNames(
            'p-galleria p-component',
            {
                'p-galleria-fullscreen': props.fullScreen,
                'p-galleria-indicator-onitem': props.showIndicatorsOnItem,
                'p-galleria-item-nav-onhover': props.showItemNavigatorsOnHover && !props.fullScreen,
                'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
                'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
            },
            thumbnailsPosClassName,
            indicatorPosClassName
        ),
    content: 'p-galleria-content',
    mask: ({ visibleState }) =>
        classNames('p-galleria-mask', {
            'p-galleria-visible': visibleState
        }),
    thumbnailItem: ({ subProps }) =>
        classNames('p-galleria-thumbnail-item', {
            'p-galleria-thumbnail-item-current': subProps.current,
            'p-galleria-thumbnail-item-active': subProps.active,
            'p-galleria-thumbnail-item-start': subProps.start,
            'p-galleria-thumbnail-item-end': subProps.end
        }),
    thumbnailItemContent: 'p-galleria-thumbnail-item-content',
    previousThumbnailIcon: 'p-galleria-thumbnail-prev-icon',
    previousThumbnailButton: ({ isDisabled }) =>
        classNames('p-galleria-thumbnail-prev p-link', {
            'p-disabled': isDisabled
        }),
    nextThumbnailIcon: 'p-galleria-thumbnail-next-icon',
    nextThumbnailButton: ({ isDisabled }) =>
        classNames('p-galleria-thumbnail-next p-link', {
            'p-disabled': isDisabled
        }),
    thumbnailContainer: 'p-galleria-thumbnail-container',
    thumbnailItemsContainer: 'p-galleria-thumbnail-items-container',
    thumbnailItems: 'p-galleria-thumbnail-items',
    thumbnailWrapper: 'p-galleria-thumbnail-wrapper',
    previousItemIcon: 'p-galleria-item-prev-icon',
    previousItemButton: ({ isDisabled }) =>
        classNames('p-galleria-item-prev p-galleria-item-nav p-link', {
            'p-disabled': isDisabled
        }),
    nextItemIcon: 'p-galleria-item-next-icon',
    nextItemButton: ({ isDisabled }) =>
        classNames('p-galleria-item-next p-galleria-item-nav p-link', {
            'p-disabled': isDisabled
        }),
    caption: 'p-galleria-caption',
    indicator: ({ isActive }) =>
        classNames('p-galleria-indicator', {
            'p-highlight': isActive
        }),
    indicators: 'p-galleria-indicators p-reset',
    itemWrapper: 'p-galleria-item-wrapper',
    itemContainer: 'p-galleria-item-container',
    item: 'p-galleria-item',
    transition: 'p-galleria'
};

const styles = `
@layer primereact {
    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }
    
    .p-galleria-item-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    .p-galleria-item-container {
        position: relative;
        display: flex;
        height: 100%;
    }
    
    .p-galleria-item-nav {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    .p-galleria-item-prev {
        left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    
    .p-galleria-item-next {
        right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-nav {
        pointer-events: none;
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
        pointer-events: all;
        opacity: 1;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
        pointer-events: none;
    }
    
    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    
    /* Thumbnails */
    .p-galleria-thumbnail-wrapper {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }
    
    .p-galleria-thumbnail-prev,
    .p-galleria-thumbnail-next {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-galleria-thumbnail-prev span,
    .p-galleria-thumbnail-next span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .p-galleria-thumbnail-container {
        display: flex;
        flex-direction: row;
    }
    
    .p-galleria-thumbnail-items-container {
        overflow: hidden;
        width: 100%;
    }
    
    .p-galleria-thumbnail-items {
        display: flex;
    }
    
    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: .5;
    }
    
    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity .3s;
    }
    
    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }
    
    /* Positions */
    /* Thumbnails */
    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }
    
    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-right .p-galleria-item-wrapper {
        flex-direction: row;
    }
    
    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-top .p-galleria-item-wrapper {
        order: 2;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
    .p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
        order: 1;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-container,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-container {
        flex-direction: column;
        flex-grow: 1;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }
    
    /* Indicators */
    .p-galleria-indicators {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-galleria-indicator > button {
        display: inline-flex;
        align-items: center;
    }
    
    .p-galleria-indicators-left .p-galleria-item-wrapper,
    .p-galleria-indicators-right .p-galleria-item-wrapper {
        flex-direction: row;
        align-items: center;
    }
    
    .p-galleria-indicators-left .p-galleria-item-container,
    .p-galleria-indicators-top .p-galleria-item-container {
        order: 2;
    }
    
    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-top .p-galleria-indicators {
        order: 1;
    }
    
    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-right .p-galleria-indicators {
        flex-direction: column;
    }
    
    .p-galleria-indicator-onitem .p-galleria-indicators {
        position: absolute;
        display: flex;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }
    
    /* FullScreen */
    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }
    
    .p-galleria-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-galleria-close {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    .p-galleria-mask .p-galleria-item-nav {
        position: fixed;
        top: 50%;
        margin-top: -.5rem;
    }
    
    /* Animation */
    .p-galleria-enter {
        opacity: 0;
        transform: scale(0.7);
    }
    
    .p-galleria-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-galleria-enter-done {
        transform: none;
    }
    
    .p-galleria-exit {
        opacity: 1;
    }
    
    .p-galleria-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    
    .p-galleria-enter-active .p-galleria-item-nav {
        opacity: 0;
    }
    
    /* Keyboard Support */
    .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }
    
    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }
}
`;

const inlineStyles = {
    thumbnailItemsContainer: ({ height }) => ({ height })
};

export const GalleriaBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Galleria',
        id: null,
        value: null,
        activeIndex: 0,
        fullScreen: false,
        item: null,
        thumbnail: null,
        indicator: null,
        caption: null,
        className: null,
        closeIcon: null,
        style: null,
        header: null,
        footer: null,
        numVisible: 3,
        responsiveOptions: null,
        showItemNavigators: false,
        showThumbnailNavigators: true,
        showItemNavigatorsOnHover: false,
        changeItemOnIndicatorHover: false,
        circular: false,
        autoPlay: false,
        transitionInterval: 4000,
        showThumbnails: true,
        itemNextIcon: null,
        itemPrevIcon: null,
        nextThumbnailIcon: null,
        prevThumbnailIcon: null,
        thumbnailsPosition: 'bottom',
        verticalThumbnailViewPortHeight: '300px',
        showIndicators: false,
        showIndicatorsOnItem: false,
        indicatorsPosition: 'bottom',
        baseZIndex: 0,
        transitionOptions: null,
        onItemChange: null,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
