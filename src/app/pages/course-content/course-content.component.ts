import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Microsoft Excel',
      icon:'pi pi-fw pi-file-excel',
      items: [
        {
          label: 'Introduction',
          icon:'pi pi-fw pi-circle-fill',
          routerLink: "./MSExcelBasicIntroduction"
        },
        {
          label: 'Financial Functions ',
          icon:'pi pi-fw  pi-circle-fill',
          routerLink: "./MSExcelBasicFinancialFunction"

        },
        {
          label: 'Find and Lookup Value',
          icon:'pi pi-fw  pi-circle-fill',
          routerLink: "./MSExcelBasicLookupFunction"
        },
        {
          label: 'General Function',
          icon:'pi pi-fw pi-slack',
          routerLink: "./MSExcelGeneralFunction"
        },
        {
          label: 'Excel Date Function',
          icon:'pi pi-fw pi-slack',
          routerLink: "./MSExcelDateFunction"
        },
        {
          label: 'Excel Database Function',
          icon:'pi pi-fw pi-slack',
          routerLink: "./MSExcelDatabaseFunction"
        },
        {
          label: 'Cell Range',
          icon:'pi pi-fw  pi-slack'
        },
        {
          label: 'Cell Insertion and Deletion',
          icon:'pi pi-fw  pi-slack'
        },
        {
          label: 'Formula Copy',
          icon:'pi pi-fw  pi-slack'
        },
        {
          label: 'Formating Worksheet',
          icon:'pi pi-fw  pi-slack'
        },
        {
          label: 'Worksheet Layout',
          icon:'pi pi-fw  pi-slack'
        },
        {
          label: 'Conditional Formatting',
          icon:'pi pi-fw  pi-slack'
        }
      ]
    },
    {
      label: 'Microsoft Word',
      icon:'pi pi-fw pi-user',
      // disabled: true,
      items: [
        {
          label: 'Left',
          icon:'pi pi-fw pi-align-left'
        },
        {
          label: 'Right',
          icon:'pi pi-fw pi-align-right'
        },
        {
          label: 'Center',
          icon:'pi pi-fw pi-align-center'
        },
        {
          label: 'Justify',
          icon:'pi pi-fw pi-align-justify'
        }
      ]
    },
    {
      label: 'Microsoft Powerpoint',
      icon:'pi pi-fw pi-user',
      // disabled: true,
      items: [

      ]
    },
    {
      label: 'Programming Language',
      icon:'pi pi-fw pi-pencil',
      items: [
        {
          label: 'C Language',
          icon:'pi pi-fw pi-star-fill'
        },
        {
          label: 'C++ Language',
          icon:'pi pi-fw pi-star-fill'
        },
        {
          label: 'JAVA',
          icon:'pi pi-fw pi-star-fill'
        },
        {
          label: 'Python',
          icon:'pi pi-fw pi-star-fill'
        },
        {
          label: 'Angular js',
          icon:'pi pi-fw pi-star-fill'
        }
      ]
    },
    {
      label: 'Web Designing',
      icon:'pi pi-fw pi-user',
      // disabled: true,
      items: [
        {
          label: 'New',
          icon:'pi pi-fw pi-user-plus',

        },
        {
          label: 'Delete',
          icon:'pi pi-fw pi-user-minus',
        },
        {
          label: 'Search',
          icon:'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon:'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon:'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon:'pi pi-fw pi-bars',
              label: 'List'
            }
          ]
        }
      ]
    },
    {
      label: 'Photoshop & Photography',
      icon:'pi pi-fw pi-calendar',
      // disabled: true,
      items: [
        {
          label: 'Edit',
          icon:'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Save',
              icon:'pi pi-fw pi-calendar-plus'
            },
            {
              label: 'Delete',
              icon:'pi pi-fw pi-calendar-minus'
            }
          ]
        },
        {
          label: 'Archieve',
          icon:'pi pi-fw pi-calendar-times',
          items: [
            {
              label: 'Remove',
              icon:'pi pi-fw pi-calendar-minus'
            }
          ]
        }
      ]
    },
    {
      label: 'Data Structure',
      icon:'pi pi-fw pi-calendar',
      // disabled: true,
      items: [
        {
          label: 'Link List',
          icon:'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Save',
              icon:'pi pi-fw pi-calendar-plus'
            },
            {
              label: 'Delete',
              icon:'pi pi-fw pi-calendar-minus'
            }
          ]
        },
        {
          label: 'Archieve',
          icon:'pi pi-fw pi-calendar-times',
          items: [
            {
              label: 'Remove',
              icon:'pi pi-fw pi-calendar-minus'
            }
          ]
        }
      ]
    }
  ];
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {

  }

}
