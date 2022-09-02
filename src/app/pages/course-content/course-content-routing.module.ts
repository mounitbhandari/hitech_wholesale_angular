import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseContentComponent } from './course-content.component';
import {CourseContentHomeComponent} from "./course-content-home/course-content-home.component";

const routes: Routes = [
                        { path: '',
                          component: CourseContentComponent,
                          children: [
                            { path: '', component: CourseContentHomeComponent },

                            { path: 'CourseContentExcel', loadChildren: () => import('./course-content-excel/course-content-excel.module').then(m =>m.CourseContentExcelModule) },

                            { path: 'MSExcelBasicIntroduction', loadChildren: () => import('./ExcelBasic/msexcel-basic-introduction/msexcel-basic-introduction.module').then(m =>m.MSExcelBasicIntroductionModule) },

                            { path: 'MSExcelBasicFinancialFunction', loadChildren: () => import('./ExcelBasic/msexcel-basic-financial-function/msexcel-basic-financial-function.module').then(m =>m.MSExcelBasicFinancialFunctionModule) },

                            { path: 'MSExcelBasicLookupFunction', loadChildren: () => import('./ExcelBasic/msexcel-basic-lookup-function/msexcel-basic-lookup-function.module').then(m =>m.MsexcelBasicLookupFunctionModule) },

                            { path: 'MSExcelGeneralFunction', loadChildren: () => import('./ExcelBasic/msexcel-general-function/msexcel-general-function.module').then(m =>m.MsexcelGeneralFunctionModule) },

                            { path: 'MSExcelDateFunction', loadChildren: () => import('./ExcelBasic/excel-date-function/excel-date-function.module').then(m =>m.ExcelDateFunctionModule) },

                            { path: 'MSExcelDatabaseFunction', loadChildren: () => import('./ExcelBasic/excel-database/excel-database.module').then(m =>m.ExcelDatabaseModule) }
                          ]
                        }
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseContentRoutingModule { }
