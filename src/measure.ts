export const hasWindow = typeof window === 'object';
export const hasDocument = typeof document !== 'undefined' && document.documentElement;

export const documentHeight = () => {
    if (hasDocument) {
        const $body = document.body;
        const $html = document.documentElement;

        return $html
            ? Math.max(
                $body.scrollHeight,
                $body.offsetHeight,
                $html.clientHeight,
                $html.scrollHeight,
                $html.offsetHeight
            )
            : 0;
    }

    return 0;
};

export const windowWidth = () => {
    return hasWindow && hasDocument
        ? window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
        : 0;
};

export const windowHeight = () => {
    return hasWindow && hasDocument
        ? window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
        : 0;
};

export const scrollTopDistance = () => {
    return hasWindow && hasDocument
        ? window.pageYOffset || document.documentElement.scrollTop
        : 0;
};

export const scrollLeftDistance = (element?: Element) => {
    return !!element ? element.scrollLeft : (typeof window !== 'undefined' && document && document.documentElement
        ? window.pageYOffset || document.documentElement.scrollLeft
        : 0);
};

export const height = (element: Element) => {
    return element.getBoundingClientRect().height;
};

export const width = (element: Element) => {
    return element.getBoundingClientRect().width;
};

export const topEdgeDistance = (element: Element, relativeTo?: 'document' | Element) => {
    const rect = element.getBoundingClientRect();

    switch (relativeTo) {
        case undefined:
            return rect.top + scrollTopDistance();
        case 'document':
            return element.getBoundingClientRect().top;
        default:
            const relativeRect = relativeTo.getBoundingClientRect();
            return rect.top - relativeRect.top;
    }
};

export const bottomEdgeDistance = (element: Element, relativeTo?: 'document' | Element) => {
    const rect = element.getBoundingClientRect();

    switch (relativeTo) {
        case undefined:
            return rect.bottom + scrollTopDistance();
        case 'document':
            return element.getBoundingClientRect().bottom;
        default:
            const relativeRect = relativeTo.getBoundingClientRect();
            return rect.bottom - relativeRect.bottom;
    }
};

export const leftEdgeDistance = (element: Element, relativeTo?: 'document' | Element) => {
    const rect = element.getBoundingClientRect();


    switch (relativeTo) {
        case undefined:
            const scrollLeftPosition =
                relativeTo ? scrollLeftDistance(relativeTo) : (hasWindow && hasDocument
                    ? window.pageXOffset || document.documentElement.scrollLeft
                    : 0);
            return rect.left + scrollLeftPosition;
        case 'document':
            return rect.left;
        default:
            const relativeRect = relativeTo.getBoundingClientRect();
            return relativeRect.left - rect.left;
    }
};

export const rightEdgeDistance = (element: Element, relativeTo?: 'document' | Element) => {
    const rect = element.getBoundingClientRect();

    switch (relativeTo) {
        case undefined:
            const widthOfWindow = windowWidth();
            return widthOfWindow - rect.right;
        case 'document':
            return rect.right;
        default:
            const relativeRect = relativeTo.getBoundingClientRect();
            return relativeRect.right - rect.right;
    }
};

export const inViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight() &&
        rect.right <= windowWidth()
    );
};
