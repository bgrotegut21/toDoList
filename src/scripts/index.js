
import nav from "./nav.js";
import {createDomElements} from "./pageLayout.js";


createDomElements();
let mainNavigation = nav();
mainNavigation.activateNavigation();