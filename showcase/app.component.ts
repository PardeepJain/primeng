import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {SetupComponent} from './setup.component';
import {HomePageComponent} from './homepage.component';
import {ThemingComponent} from './theming.component';
import {InputTextDemo} from './demo/inputtext/inputtextdemo';
import {ButtonDemo} from './demo/button/buttondemo';
import {SpinnerDemo} from './demo/spinner/spinnerdemo';
import {PanelDemo} from './demo/panel/paneldemo';
import {FieldsetDemo} from './demo/fieldset/fieldsetdemo';
import {RatingDemo} from './demo/rating/ratingdemo';
import {PasswordDemo} from './demo/password/passworddemo';
import {DialogDemo} from './demo/dialog/dialogdemo';
import {ToggleButtonDemo} from './demo/togglebutton/togglebuttondemo';
import {GridDemo} from './demo/grid/griddemo';
import {TabViewDemo} from './demo/tabview/tabviewdemo';
import {RadioButtonDemo} from './demo/radiobutton/radiobuttondemo';
import {AccordionDemo} from './demo/accordion/accordiondemo';
import {InputTextareaDemo} from './demo/inputtextarea/inputtextareademo';
import {GalleriaDemo} from './demo/galleria/galleriademo';
import {CheckboxDemo} from './demo/checkbox/checkboxdemo';
import {ListboxDemo} from './demo/listbox/listboxdemo';
import {MessagesDemo} from './demo/messages/messagesdemo';
import {GrowlDemo} from './demo/growl/growldemo';
import {CarouselDemo} from './demo/carousel/carouseldemo';
import {InputSwitchDemo} from './demo/inputswitch/inputswitchdemo';
import {SelectButtonDemo} from './demo/selectbutton/selectbuttondemo';
import {CalendarDemo} from './demo/calendar/calendardemo';
import {DropdownDemo} from './demo/dropdown/dropdowndemo';
import {ProgressBarDemo} from './demo/progressbar/progressbardemo';
import {ChartDemo} from './demo/chart/chartdemo';
import {PieChartDemo} from './demo/chart/piechart/piechartdemo';
import {DoughnutChartDemo} from './demo/chart/doughnutchart/doughnutchartdemo';
import {LineChartDemo} from './demo/chart/linechart/linechartdemo';
import {BarChartDemo} from './demo/chart/barchart/barchartdemo';
import {RadarChartDemo} from './demo/chart/radarchart/radarchartdemo';
import {PolarAreaChartDemo} from './demo/chart/polarareachart/polarareachartdemo';
import {MenuDemo} from './demo/menu/menudemo';
import {TieredMenuDemo} from './demo/tieredmenu/tieredmenudemo';
import {MenubarDemo} from './demo/menubar/menubardemo';
import {SlideMenuDemo} from './demo/slidemenu/slidemenudemo';
import {BreadcrumbDemo} from './demo/breadcrumb/breadcrumbdemo';
import {SliderDemo} from "./demo/slider/sliderdemo";
import {LightboxDemo} from "./demo/lightbox/lightboxdemo";
import {PaginatorDemo} from "./demo/paginator/paginatordemo";
import {MegaMenuDemo} from "./demo/megamenu/megamenudemo";
import {PanelMenuDemo} from "./demo/panelmenu/panelmenudemo";
import {DataTableDemo} from "./demo/datatable/datatabledemo";
import {DataTableEditableDemo} from "./demo/datatable/datatableeditabledemo";
import {DataTableFacetsDemo} from "./demo/datatable/datatablefacetsdemo";
import {DataTablePaginatorDemo} from "./demo/datatable/datatablepaginatordemo";
import {DataTableSortDemo} from "./demo/datatable/datatablesortdemo";
import {DataTableResponsiveDemo} from "./demo/datatable/datatableresponsivedemo";
import {DataTableSelectionDemo} from "./demo/datatable/datatableselectiondemo";
import {DataTableFilterDemo} from "./demo/datatable/datatablefilterdemo";
import {DataTableColResizeDemo} from "./demo/datatable/datatablecolresizedemo";
import {DataTableColReorderDemo} from "./demo/datatable/datatablecolreorderdemo";
import {DataTableScrollDemo} from "./demo/datatable/datatablescrolldemo";
import {DataTableGroupDemo} from "./demo/datatable/datatablegroupdemo";
import {DataTableCrudDemo} from "./demo/datatable/datatablecruddemo";
import {DataTableLazyDemo} from "./demo/datatable/datatablelazydemo";
import {DataTableTemplatingDemo} from "./demo/datatable/datatabletemplatingdemo";
import {DataTableCMDemo} from "./demo/datatable/datatablecmdemo";
import {DataTableColTogglerDemo} from "./demo/datatable/datatablecoltogglerdemo";
import {DataTableRowExpansionDemo} from "./demo/datatable/datatablerowexpansiondemo";
import {CodeHighlighterDemo} from "./demo/codehighlighter/codehighlighterdemo";
import {OrderListDemo} from "./demo/orderlist/orderlistdemo";
import {PickListDemo} from "./demo/picklist/picklistdemo";
import {ScheduleDemo} from "./demo/schedule/scheduledemo";
import {DataGridDemo} from "./demo/datagrid/datagriddemo";
import {DataListDemo} from "./demo/datalist/datalistdemo";
import {DataScrollerDemo} from "./demo/datascroller/datascrollerdemo";
import {DataScrollerInlineDemo} from "./demo/datascroller/datascrollerinlinedemo";
import {DataScrollerLoaderDemo} from "./demo/datascroller/datascrollerloaderdemo";
import {DataScrollerInfiniteDemo} from "./demo/datascroller/datascrollerinfinitedemo";
import {TreeDemo} from "./demo/tree/treedemo";
import {TreeTableDemo} from "./demo/treetable/treetabledemo";
import {TerminalDemo} from "./demo/terminal/terminaldemo";
import {SplitButtonDemo} from "./demo/splitbutton/splitbuttondemo";
import {OverlayPanelDemo} from "./demo/overlaypanel/overlaypaneldemo";
import {AutoCompleteDemo} from "./demo/autocomplete/autocompletedemo";
import {EditorDemo} from "./demo/editor/editordemo";
import {ResponsiveDemo} from "./demo/responsive/responsivedemo";
import {MultiSelectDemo} from "./demo/multiselect/multiselectdemo";
import {GMapDemo} from "./demo/gmap/gmapdemo";
import {ContextMenuDemo} from "./demo/contextmenu/contextmenudemo";
import {DragDropDemo} from "./demo/dragdrop/dragdropdemo";
import {ToolbarDemo} from "./demo/toolbar/toolbardemo";
import {ValidationDemo} from "./demo/validation/validationdemo";
import {DataTableExportDemo} from "./demo/datatable/datatableexportdemo";
import {TabMenuDemo} from "./demo/tabmenu/tabmenudemo";
import {TooltipDemo} from "./demo/tooltip/tooltipdemo";
import {MenuModelApi} from "./demo/menumodel/menumodelapi";
import {CardDemo, ViewCardDemo } from "./demo/card/carddemo";
import {Buttoncomponent} from "./demo/buttondemo/buttondemo";
import {Navbarcomponent} from "./demo/navbar/navbar1";
import {sidebarcomponent} from './demo/sidenav/sidenav';

// Pleateando
import { PButtonDemo } from "./demo/p-button/buttondemo";
import { PCardDemo } from "./demo/p-card/p-card";
import { PProcedureCardDemo } from "./demo/p-procedure-card/p-procedure-card";

import {Modalcomponent} from "./demo/modaldemo/modaldemo";

@Component({
    selector: 'primeng-showcase',
    templateUrl: 'showcase/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/', component: HomePageComponent },
    { path: '/setup', component: SetupComponent },
    { path: '/card', component: CardDemo },
    { path: '/simplecard', component: ViewCardDemo },

    { path: '/lightbutton', component: Buttoncomponent },
    { path: '/navbar', component: Navbarcomponent },
    { path: '/sidenav', component: sidebarcomponent },
    { path: '/modal', component: Modalcomponent },

    { path: '/theming', component: ThemingComponent },
    { path: '/inputtext', component: InputTextDemo },
    { path: '/button', component: ButtonDemo },
    { path: '/spinner', component: SpinnerDemo },
    { path: '/panel', component: PanelDemo },
    { path: '/fieldset', component: FieldsetDemo },
    { path: '/rating', component: RatingDemo },
    { path: '/password', component: PasswordDemo },
    { path: '/dialog', component: DialogDemo },
    { path: '/togglebutton', component: ToggleButtonDemo },
    { path: '/grid', component: GridDemo },
    { path: '/tabview', component: TabViewDemo },
    { path: '/radiobutton', component: RadioButtonDemo },
    { path: '/accordion', component: AccordionDemo },
    { path: '/inputtextarea', component: InputTextareaDemo },
    { path: '/galleria', component: GalleriaDemo },
    { path: '/checkbox', component: CheckboxDemo },
    { path: '/listbox', component: ListboxDemo },
    { path: '/messages', component: MessagesDemo },
    { path: '/growl', component: GrowlDemo },
    { path: '/carousel', component: CarouselDemo },
    { path: '/inputswitch', component: InputSwitchDemo },
    { path: '/selectbutton', component: SelectButtonDemo },
    { path: '/calendar', component: CalendarDemo },
    { path: '/dropdown', component: DropdownDemo },
    { path: '/progressbar', component: ProgressBarDemo },
    { path: '/chart', component: ChartDemo },
    { path: '/piechart', component: PieChartDemo },
    { path: '/doughnutchart', component: DoughnutChartDemo },
    { path: '/linechart', component: LineChartDemo },
    { path: '/barchart', component: BarChartDemo },
    { path: '/radarchart', component: RadarChartDemo },
    { path: '/polarareachart', component: PolarAreaChartDemo },
    { path: '/menu', component: MenuDemo },
    { path: '/tieredmenu', component: TieredMenuDemo },
    { path: '/menubar', component: MenubarDemo },
    { path: '/slidemenu', component: SlideMenuDemo },
    { path: '/breadcrumb', component: BreadcrumbDemo },
    { path: '/slider', component: SliderDemo },
    { path: '/lightbox', component: LightboxDemo },
    { path: '/paginator', component: PaginatorDemo },
    { path: '/megamenu', component: MegaMenuDemo },
    { path: '/panelmenu', component: PanelMenuDemo },
    { path: '/datatable', component: DataTableDemo },
    { path: '/datatablefacets', component: DataTableFacetsDemo },
    { path: '/datatablepaginator', component: DataTablePaginatorDemo },
    { path: '/datatablesort', component: DataTableSortDemo },
    { path: '/datatableresponsive', component: DataTableResponsiveDemo },
    { path: '/datatableselection', component: DataTableSelectionDemo },
    { path: '/datatablefilter', component: DataTableFilterDemo },
    { path: '/datatableeditable', component: DataTableEditableDemo },
    { path: '/datatablecolresize', component: DataTableColResizeDemo },
    { path: '/datatablecolreorder', component: DataTableColReorderDemo },
    { path: '/datatablescroll', component: DataTableScrollDemo },
    { path: '/datatablegroup', component: DataTableGroupDemo },
    { path: '/datatablelazy', component: DataTableLazyDemo },
    { path: '/datatablecrud', component: DataTableCrudDemo },
    { path: '/datatabletemplating', component: DataTableTemplatingDemo },
    { path: '/datatablecontextmenu', component: DataTableCMDemo },
    { path: '/datatablecoltoggler', component: DataTableColTogglerDemo },
    { path: '/datatablerowexpansion', component: DataTableRowExpansionDemo },
    { path: '/codehighlighter', component: CodeHighlighterDemo },
    { path: '/orderlist', component: OrderListDemo },
    { path: '/picklist', component: PickListDemo },
    { path: '/schedule', component: ScheduleDemo },
    { path: '/datagrid', component: DataGridDemo },
    { path: '/datalist', component: DataListDemo },
    { path: '/datascroller', component: DataScrollerDemo },
    { path: '/datascrollerinline', component: DataScrollerInlineDemo },
    { path: '/datascrollerloader', component: DataScrollerLoaderDemo },
    { path: '/datascrollerinfinite', component: DataScrollerInfiniteDemo },
    { path: '/tree', component: TreeDemo },
    { path: '/treetable', component: TreeTableDemo },
    { path: '/terminal', component: TerminalDemo },
    { path: '/splitbutton', component: SplitButtonDemo },
    { path: '/overlaypanel', component: OverlayPanelDemo },
    { path: '/autocomplete', component: AutoCompleteDemo },
    { path: '/editor', component: EditorDemo },
    { path: '/responsive', component: ResponsiveDemo },
    { path: '/multiselect', component: MultiSelectDemo },
    { path: '/gmap', component: GMapDemo },
    { path: '/contextmenu', component: ContextMenuDemo },
    { path: '/dragdrop', component: DragDropDemo },
    { path: '/toolbar', component: ToolbarDemo },
    { path: '/validation', component: ValidationDemo },
    { path: '/datatableexport', component: DataTableExportDemo },
    { path: '/tabmenu', component: TabMenuDemo },
    { path: '/tooltip', component: TooltipDemo },
    { path: '/menumodel', component: MenuModelApi },
    
    // Pleateando
    { path: '/PButtonDemo', component: PButtonDemo },
    { path: '/PCardDemo', component: PCardDemo },
    { path: '/Procedure-Card', component: PProcedureCardDemo }
])
export class AppComponent {

    activeMenuId: string;

    themesVisible: boolean = false;

    mobileMenuActive: boolean = false;

    toggleMenu(e) {
        this.mobileMenuActive = !this.mobileMenuActive;
        e.preventDefault();
    }
}
