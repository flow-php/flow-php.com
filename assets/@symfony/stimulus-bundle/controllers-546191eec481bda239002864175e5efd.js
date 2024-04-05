
export const eagerControllers = {};
export const lazyControllers = {"clipboard": () => import("../../controllers/clipboard_controller.js"), "syntax-highlight": () => import("../../controllers/syntax_highlight_controller.js")};
export const isApplicationDebug = false;