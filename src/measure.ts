export const hasWindow = typeof window === "object";
export const hasDocument =
  typeof document !== "undefined" && document.documentElement;

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
  return element
    ? element.scrollLeft
    : typeof window !== "undefined" && document && document.documentElement
    ? window.pageXOffset || document.documentElement.scrollLeft
    : 0;
};

export const propFromRect = (
  rect: DOMRect,
  prop: keyof Omit<DOMRectReadOnly, "toJSON">
) => {
  return rect[prop];
};

export const rawHeight = (element: Element, rect?: DOMRect) => {
  return (rect || element.getBoundingClientRect()).height;
};

export const rawHeightWithMargin = (element: Element, rect?: DOMRect) => {
  const styles = window.getComputedStyle(element);
  const margin =
    parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

  return rawHeight(element, rect) + margin;
};

export const height = (
  element: Element,
  rect?: DOMRect,
  includeMargin?: boolean
) => {
  return includeMargin
    ? rawHeightWithMargin(element, rect)
    : rawHeight(element);
};

export const rawWidth = (element: Element, rect?: DOMRect) => {
  return (rect || element.getBoundingClientRect()).width;
};

export const rawWidthWithMargin = (element: Element, rect?: DOMRect) => {
  const styles = window.getComputedStyle(element);
  const margin =
    parseFloat(styles["marginLeft"]) + parseFloat(styles["marginRight"]);

  return rawWidth(element, rect) + margin;
};

export const width = (
  element: Element,
  includeMargin?: boolean,
  rect?: DOMRect
) => {
  return includeMargin
    ? rawWidthWithMargin(element, rect)
    : rawWidth(element, rect);
};

export const topEdgeDistance = (
  element: Element,
  relativeTo: "viewport" | "document" | Element = "viewport",
  rect?: DOMRect
) => {
  rect = rect || element.getBoundingClientRect();
  let relativeRect: DOMRect | undefined;
  switch (relativeTo) {
    case "document":
      return rect.top + scrollTopDistance();
    case "viewport":
      return element.getBoundingClientRect().top;
    default:
      relativeRect = relativeTo.getBoundingClientRect();
      return rect.top - relativeRect.top;
  }
};

export const bottomEdgeDistance = (
  element: Element,
  relativeTo: "viewport" | "document" | Element = "viewport",
  rect?: DOMRect
) => {
  rect = rect || element.getBoundingClientRect();
  let relativeRect: DOMRect | undefined;

  switch (relativeTo) {
    case "document":
      return rect.bottom + scrollTopDistance();
    case "viewport":
      return element.getBoundingClientRect().bottom;
    default:
      relativeRect = relativeTo.getBoundingClientRect();
      return rect.bottom - relativeRect.bottom;
  }
};

export const leftEdgeDistance = (
  element: Element,
  relativeTo: "viewport" | "document" | Element = "viewport",
  rect?: DOMRect
) => {
  rect = rect || element.getBoundingClientRect();
  let relativeRect: DOMRect | undefined;
  let scrollLeftPosition: number | undefined;

  switch (relativeTo) {
    case "document":
      scrollLeftPosition = relativeTo
        ? scrollLeftDistance()
        : hasWindow && hasDocument
        ? window.pageXOffset || document.documentElement.scrollLeft
        : 0;
      return rect.left + scrollLeftPosition;
    case "viewport":
      return rect.left;
    default:
      relativeRect = relativeTo.getBoundingClientRect();
      return relativeRect.left - rect.left;
  }
};

export const rightEdgeDistance = (
  element: Element,
  relativeTo: "viewport" | "document" | Element = "viewport",
  rect?: DOMRect
) => {
  rect = rect || element.getBoundingClientRect();
  let relativeRect: DOMRect | undefined;
  let widthOfWindow: number | undefined;

  switch (relativeTo) {
    case "document":
      widthOfWindow = windowWidth();
      return widthOfWindow - rect.right;
    case "viewport":
      return rect.right;
    default:
      relativeRect = relativeTo.getBoundingClientRect();
      return relativeRect.right - rect.right;
  }
};

export const inViewport = (element: Element, rect?: DOMRect) => {
  rect = rect || element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight() &&
    rect.right <= windowWidth()
  );
};

export const percentInViewport = (
  element: Element,
  viewportHeight?: number,
  rect?: DOMRect
) => {
  rect = rect || element.getBoundingClientRect();
  viewportHeight = viewportHeight || windowHeight();
  const bottomEdge = bottomEdgeDistance(element, "viewport", rect);

  return (
    (Math.min(Math.max(bottomEdge, 0), rect.height) -
      Math.max(bottomEdge - viewportHeight, 0)) /
    (rect.height / 100)
  );
};
