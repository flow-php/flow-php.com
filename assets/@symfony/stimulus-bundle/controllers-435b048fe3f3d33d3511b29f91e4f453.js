import controller_0 from "../../controllers/scroll_to_top_controller.js";
export const eagerControllers = {"scroll-to-top": controller_0};
export const lazyControllers = {"clipboard": () => import("../../controllers/clipboard_controller.js"), "all-links-external": () => import("../../controllers/all_links_external_controller.js"), "syntax-highlight": () => import("../../controllers/syntax_highlight_controller.js")};
export const isApplicationDebug = false;