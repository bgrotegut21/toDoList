
import nav from "./nav.js";
import {createDomElements} from "./pageLayout.js";
import send from "./send.js";






createDomElements();
let mainNavigation = nav();
mainNavigation.activateNavigation();