import controller_0 from "../../controllers/scroll_to_top_controller.js";
export const eagerControllers = {"scroll-to-top": controller_0};
export const lazyControllers = {"cookie-fallback": () => import("../../controllers/cookie_fallback_controller.js"), "cookie-consent": () => import("../../controllers/cookie_consent_controller.js"), "clipboard": () => import("../../controllers/clipboard_controller.js"), "all-links-external": () => import("../../controllers/all_links_external_controller.js"), "syntax-highlight": () => import("../../controllers/syntax_highlight_controller.js")};
export const isApplicationDebug = false;