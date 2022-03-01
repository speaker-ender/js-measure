import create from "zustand";
import { IScrollPosition } from "../components/positions/scrollPosition";
import { IWindowSize } from "../components/positions/windowSize";
import * as positions from '../../src/positions';
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
        scrollTop: positions.scrollTop(),
        scrollLeft: positions.scrollLeft()
    }
}

export const getWindowSize = () => {
    return {
        windowHeight: positions.windowHeight(),
        windowWidth: positions.windowWidth(),
        documentHeight: positions.documentHeight()
    }
}

const getElementPositions = (element: HTMLElement | null) => {
    return {
        height: element ? positions.height(element) : 0,
        width: element ? positions.width(element) : 0,
        topPosition: element ? positions.topPosition(element) : 0,
        relativeTopPosition: element ? positions.relativeTopPosition(element) : 0,
        rightPosition: element ? positions.rightPosition(element) : 0,
        bottomPosition: element ? positions.bottomPosition(element) : 0,
        relativeBottomPosition: element ? positions.relativeBottomPosition(element) : 0,
        leftPosition: element ? positions.leftPosition(element) : 0,
        inViewport: element ? positions.inViewport(element) : false,
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
