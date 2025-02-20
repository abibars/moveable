import {
    DEFAULT_BOUNDS_CONTROLS,
    DEFAULT_DRAGGABLE_CONTROLS,
    DEFAULT_INNER_BOUNDS_CONTROLS,
    DEFAULT_RESIZABLE_CONTROLS,
    DEFAULT_ROTATABLE_CONTROLS,
    DEFAULT_SCALABLE_CONTROLS,
    DEFAULT_SNAPPABLE_CONTROLS,
    DEFAULT_SNAPPABLE_ELEMENTS_CONTROLS,
    DEFAULT_SNAPPABLE_GUIDELINES_CONTROLS,
    DEFAULT_SNAP_CONTAINER_CONTROLS,
    DEFAULT_SNAP_GRID_CONTROLS,
} from "../controls/default";
import { makeArgType, makeLink } from "../utils";
import { add } from "../utils/story";


export default {
    title: "Snap & Bound",
};

export const SnapGuidelines = add("Snap Guidelines", {
    app: require("./ReactSnapGuidelinesApp").default,
    path: require.resolve("./ReactSnapGuidelinesApp"),
    argsTypes: {
        ...DEFAULT_SNAPPABLE_CONTROLS,
        ...DEFAULT_SNAPPABLE_GUIDELINES_CONTROLS,
        ...DEFAULT_DRAGGABLE_CONTROLS,
        ...DEFAULT_SCALABLE_CONTROLS,
    },
});

export const SnapElements = add("Snap Elements", {
    app: require("./ReactSnapElementsApp").default,
    path: require.resolve("./ReactSnapElementsApp"),
    argsTypes: {
        ...DEFAULT_SNAPPABLE_CONTROLS,
        ...DEFAULT_SNAPPABLE_ELEMENTS_CONTROLS,
    },
});


export const SnapGrid = add("Snap Grid", {
    app: require("./ReactSnapGridApp").default,
    path: require.resolve("./ReactSnapGridApp"),
    argsTypes: {
        ...DEFAULT_DRAGGABLE_CONTROLS,
        ...DEFAULT_SCALABLE_CONTROLS,
        ...DEFAULT_SNAP_GRID_CONTROLS,
    },
});

export const SnapBoundDragScale = add("Bound Drag & Scale", {
    app: require("./ReactBoundScalableApp").default,
    path: require.resolve("./ReactBoundScalableApp"),
    argsTypes: {
        ...DEFAULT_DRAGGABLE_CONTROLS,
        ...DEFAULT_SCALABLE_CONTROLS,
        ...DEFAULT_BOUNDS_CONTROLS,
    },
});

export const SnapBoundDragResize = add("Bound Drag & Resize", {
    app: require("./ReactBoundResizableApp").default,
    path: require.resolve("./ReactBoundResizableApp"),
    argsTypes: {
        ...DEFAULT_DRAGGABLE_CONTROLS,
        ...DEFAULT_RESIZABLE_CONTROLS,
        ...DEFAULT_BOUNDS_CONTROLS,
    },
});


export const SnapDragRotate = add("Bound Drag & Rotate", {
    app: require("./ReactBoundRotatableApp").default,
    path: require.resolve("./ReactBoundRotatableApp"),
    argsTypes: {
        ...DEFAULT_DRAGGABLE_CONTROLS,
        ...DEFAULT_ROTATABLE_CONTROLS,
        ...DEFAULT_BOUNDS_CONTROLS,
    },
});

export const SnapDragRotateGroup = add("Bound Drag & Rotate Group", {
    app: require("./ReactBoundRotatableGroupApp").default,
    path: require.resolve("./ReactBoundRotatableGroupApp"),
});

export const SnapSnapContainer = add("Use snapContainer option", {
    app: require("./ReactSnapContainerApp").default,
    path: require.resolve("./ReactSnapContainerApp"),
    argsTypes: {
        ...DEFAULT_SNAPPABLE_CONTROLS,
        ...DEFAULT_SNAP_CONTAINER_CONTROLS,
        ...DEFAULT_SNAPPABLE_GUIDELINES_CONTROLS,
        ...DEFAULT_BOUNDS_CONTROLS,
        ...DEFAULT_DRAGGABLE_CONTROLS,
    },
});

export const SnapInnerBoundResize = add("inner bound with resize", {
    app: require("./ReactInnerBoundResizableApp").default,
    path: require.resolve("./ReactInnerBoundResizableApp"),
    argsTypes: {
        ...DEFAULT_INNER_BOUNDS_CONTROLS,
    },
});

export const SnapMaxiumDistance = add("Set maximum distance for guidelines", {
    app: require("./ReactMaxSnapElementApp").default,
    path: require.resolve("./ReactMaxSnapElementApp"),
    argsTypes: {
        maxSnapElementGuidelineDistance: makeArgType({
            type: "number",
            description: makeLink("Snappable", "maxSnapElementGuidelineDistance"),
            defaultValue: 100,
        }),
        maxSnapElementGapDistance: makeArgType({
            type: "number",
            description: makeLink("Snappable", "maxSnapElementGapDistance"),
            defaultValue: 80,
        }),
    },
});


export const SnapElementsGroup = add("Snap Elements (group)", {
    app: require("./ReactSnapElementsGroupApp").default,
    path: require.resolve("./ReactSnapElementsGroupApp"),
});


// export * from "./9-maxSnapElement.stories";
