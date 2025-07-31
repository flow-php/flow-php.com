import controller_0 from "../../controllers/scroll_to_top_controller.js";
export const eagerControllers = {"scroll-to-top": controller_0};
export const lazyControllers = {"all-links-external": () => import("../../controllers/all_links_external_controller.js"), "clipboard": () => import("../../controllers/clipboard_controller.js"), "mermaid": () => import("../../controllers/mermaid_controller.js"), "syntax-highlight": () => import("../../controllers/syntax_highlight_controller.js")};
export const isApplicationDebug = false;