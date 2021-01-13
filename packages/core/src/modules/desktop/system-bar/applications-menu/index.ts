import ModuleDesktopSystemBar from "../../../../lib/modules/extend/modulesDesktop.class";
import ApplicationsMenu from './components/ApplicationsMenu.vue'
import ApplicationsMenuContent from './components/ApplicationsMenuContent.vue'

ModuleDesktopSystemBar.registerModule({
  name: 'applications-menu',
  area: 'system-bar',
  position: 'left',
  opened: false
}, {
  menu: ApplicationsMenu,
  content: ApplicationsMenuContent
});