
export const eagerControllers = {};
export const lazyControllers = {"syntax-highlight": () => import("../../controllers/syntax_highlight_controller.js"), "clipboard": () => import("../../controllers/clipboard_controller.js")};
export const isApplicationDebug = false;