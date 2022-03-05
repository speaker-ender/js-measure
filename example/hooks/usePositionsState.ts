import create from "zustand";
import { IScrollPosition } from "../components/positions/scrollPosition";
import { IWindowSize } from "../components/positions/windowSize";
import * as measure from '../../src/measure';
import { IComponentPosition } from "../components/positions/componentPosition";

interface IPositionsState {
    scrollPosition: IScrollPosition,
    windowSize: IWindowSize,
    componentPosition: IComponentPosition,
    refreshPositions: () => void,
    targetElement: HTMLElement | null;
    updateTargetElement: (element: HTMLElement) => void;
}

export const getScrollPosition = () => {
    return {
        scrollTop: measure.scrollTopDistance(),
        scrollLeft: measure.scrollLeftDistance()
    }
}

export const getWindowSize = () => {
    return {
        windowHeight: measure.windowHeight(),
        windowWidth: measure.windowWidth(),
        documentHeight: measure.documentHeight()
    }
}

const getElementPositions = (element: HTMLElement | null) => {
    return {
        height: element ? measure.height(element) : 0,
        width: element ? measure.width(element) : 0,
        topPosition: element ? measure.topEdgeDistance(element) : 0,
        relativeTopPosition: element ? measure.topEdgeDistance(element, 'document') : 0,
        rightPosition: element ? measure.rightEdgeDistance(element) : 0,
        bottomPosition: element ? measure.bottomEdgeDistance(element) : 0,
        relativeBottomPosition: element ? measure.bottomEdgeDistance(element, 'document') : 0,
        leftPosition: element ? measure.leftEdgeDistance(element) : 0,
        inViewport: element ? measure.inViewport(element) : false,
    }
}

export const usePositionsState = create<IPositionsState>((set, get) => ({
    scrollPosition: getScrollPosition(),
    windowSize: getWindowSize(),
    targetElement: null,
    updateTargetElement: (newTargetElement: HTMLElement) => set({
        targetElement: newTargetElement
    }),
    componentPosition: getElementPositions(null),
    refreshPositions: () => {
        set({
            scrollPosition: getScrollPosition(),
            windowSize: getWindowSize(),
            componentPosition: getElementPositions(get().targetElement),
        })
    }

}));
