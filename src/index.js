/*

   Website Monitor 6.0 by Digital Inspiration
   ==========================================

   Published by Amit Agarwal on 02/14/2013
   Last updated by @labnol on 01/08/2019

   Tutorial: http://labnol.org/?p=21060

   email: amit@labnol.org
   twitter: @labnol

*/

import { onOpen, showSidebar, removeWebsiteMonitor } from './ui';
import main from './main';
import { include } from './utils';
import { saveSettings } from './server';

global.onOpen = onOpen;
global.showSidebar = showSidebar;
global.uninstall = removeWebsiteMonitor;
global.trigger_WebsiteMonitor = main;
global.include = include;
global.saveSettings = saveSettings;
