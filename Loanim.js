/**
 * @typedef {Object} LayoutContainer
 * @property {number} width - The width of the container in pixels.
 * @property {number} height - The height of the container in pixels.
 * @property {string} backgroundColor - The background color of the container.
 * @property {boolean} isVisible - Indicates whether the container is visible.
 */

/// Layout-specific properties of a layout container.
/**
 * Creates a new layout container.
 * @param {LayoutContainer} config - Configuration object for the layout container.
 * @returns {HTMLElement} The created layout container element.
 */
function createLayoutContainer(config) {
    const container = document.createElement('div');
    container.style.width = `${config.width}px`;
    container.style.height = `${config.height}px`;
    container.style.backgroundColor = config.backgroundColor;
    container.style.display = config.isVisible ? 'block' : 'none';
    return container;
}

// Example usage:
const layoutConfig = {
    width: 200,
    height: 100,
    backgroundColor: 'blue',
    isVisible: true
};

const layoutContainer = createLayoutContainer(layoutConfig);
document.body.appendChild(layoutContainer);
