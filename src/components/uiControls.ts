// import Prism from 'prismjs'
import AutoComplete from 'primevue/autocomplete'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Button from 'primevue/button'
import Breadcrumb from 'primevue/breadcrumb'
// import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'
 
import Checkbox from 'primevue/checkbox'
import Chips from 'primevue/chips'
import Chip from 'primevue/chip'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import ColorPicker from 'primevue/colorpicker'
import ContextMenu from 'primevue/contextmenu'
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import DataTable from 'primevue/datatable'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import Editor from 'primevue/editor'
// import Fieldset from 'primevue/fieldset'
import FileUpload from 'primevue/fileupload'
// import FullCalendar from 'primevue/fullcalendar'
import InlineMessage from 'primevue/inlinemessage'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import MegaMenu from 'primevue/megamenu'
import Menu from 'primevue/menu'
import Menubar from 'primevue/menubar'
import Message from 'primevue/message'
import MultiSelect from 'primevue/multiselect'
import OrderList from 'primevue/orderlist'
import OrganizationChart from 'primevue/organizationchart'
import OverlayPanel from 'primevue/overlaypanel'
import Paginator from 'primevue/paginator'
import Panel from 'primevue/panel'
import PanelMenu from 'primevue/panelmenu'
import Password from 'primevue/password'
import PickList from 'primevue/picklist'
import ProgressBar from 'primevue/progressbar'
import Rating from 'primevue/rating'
import RadioButton from 'primevue/radiobutton'
// import Ripple from 'primevue/ripple'
import SelectButton from 'primevue/selectbutton'
import Slider from 'primevue/slider'
import Sidebar from 'primevue/sidebar'
import SplitButton from 'primevue/splitbutton'
import Steps from 'primevue/steps'
import TabMenu from 'primevue/tabmenu'
import TieredMenu from 'primevue/tieredmenu'
import Timeline from 'primevue/timeline'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Toolbar from 'primevue/toolbar'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import ToggleButton from 'primevue/togglebutton'
// import Tooltip from 'primevue/tooltip'
import Tree from 'primevue/tree'
import TreeTable from 'primevue/treetable'
import TriStateCheckbox from 'primevue/tristatecheckbox'

import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import DialogService from 'primevue/dialogservice'
import Tooltip from 'primevue/tooltip';
import BadgeDirective from "primevue/badgedirective";
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

import PrimeVue from 'primevue/config'
import { App } from 'vue'
// import 'primeicons/primeicons.css'
// import '@fullcalendar/core/main.min.css'
// import '@fullcalendar/daygrid/main.min.css'
// import '@fullcalendar/timegrid/main.min.css'
// import 'prismjs/themes/prism-coy.css'
export const uiControls: { install: (app: App<Element>) => void } = {
  install: function (app: App<Element>) {
    app.use(ToastService)
    app.use(PrimeVue, { ripple: true });
    // app.component('Tooltip', Tooltip)
    // app.prototype.$appState = Vue.observable({inputStyle: 'outlined'})
    app.use(ConfirmationService);
    app.use(ToastService);
    app.use(DialogService);

    app.directive('tooltip', Tooltip);
    app.directive('badge', BadgeDirective);
    app.directive('ripple', Ripple);
    app.directive('styleclass', StyleClass);

    app.use(PrimeVue, { ripple: true })
    app.component('Accordion', Accordion)
    app.component('AccordionTab', AccordionTab)
    app.component('AutoComplete', AutoComplete)
    app.component('Breadcrumb', Breadcrumb)
    app.component('Button', Button)
    // Vue.component('Calendar', Calendar)
    app.component('Card', Card)
    app.component('Carousel', Carousel)
    app.component('Checkbox', Checkbox)
    app.component('Chips', Chips)
    app.component('Chip', Chip)
    app.component('Column', Column)
    app.component('ColumnGroup', ColumnGroup)
    app.component('ColorPicker', ColorPicker)
    app.component('ContextMenu', ContextMenu)
    app.component('ConfirmDialog', ConfirmDialog);
    app.component('ConfirmPopup', ConfirmPopup);
    app.component('DataTable', DataTable)
    app.component('DataView', DataView)
    app.component('DataViewLayoutOptions', DataViewLayoutOptions)
    app.component('Dialog', Dialog)
    app.component('Dropdown', Dropdown)
    app.component('Editor', Editor)
    // Vue.component('Fieldset', Fieldset)
    app.component('FileUpload', FileUpload)
    // Vue.component('FullCalendar', FullCalendar)
    app.component('InlineMessage', InlineMessage)
    app.component('InputMask', InputMask)
    app.component('InputNumber', InputNumber)
    app.component('InputSwitch', InputSwitch)
    app.component('InputText', InputText)
    app.component('Listbox', Listbox)
    app.component('MegaMenu', MegaMenu)
    app.component('Menu', Menu)
    app.component('Menubar', Menubar)
    app.component('Message', Message)
    app.component('MultiSelect', MultiSelect)
    app.component('OrderList', OrderList)
    app.component('OrganizationChart', OrganizationChart)
    app.component('OverlayPanel', OverlayPanel)
    app.component('Paginator', Paginator)
    app.component('Panel', Panel)
    app.component('PanelMenu', PanelMenu)
    app.component('Password', Password)
    app.component('PickList', PickList)
    app.component('ProgressBar', ProgressBar)
    app.component('RadioButton', RadioButton)
    app.component('Rating', Rating)
    app.component('SelectButton', SelectButton)
    app.component('Slider', Slider)
    app.component('Sidebar', Sidebar)
    app.component('SplitButton', SplitButton)
    app.component('Steps', Steps)
    app.component('TabMenu', TabMenu)
    app.component('TabView', TabView)
    app.component('TabPanel', TabPanel)
    app.component('Textarea', Textarea)
    app.component('Timeline', Timeline)
    app.component('TieredMenu', TieredMenu)
    app.component('Toast', Toast)
    app.component('Toolbar', Toolbar)
    app.component('ToggleButton', ToggleButton)
    app.component('Tree', Tree)
    app.component('TreeTable', TreeTable)
    app.component('TriStateCheckbox', TriStateCheckbox)
    // import Access from './pages/Access'
    // import Error from './pages/Error'
    // import Login from './pages/Login'
    // import NotFound from './pages/NotFound'

     
  }
}
