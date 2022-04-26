import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Software Engineer',
    children: [
      {
        name: 'Year 1',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'Intro to Computer'}, {name: 'Math 1'}, {name: 'Physics 1'}, {name: 'English 1'}, {name: 'Humanities'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SP'}, {name: 'Math 2'}, {name: 'Physics 2'}, {name: 'English 2'}, {name: 'Ethics'}
            ]
          }],
      },
      {
        name: 'Year 2',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DS'}, {name: 'Math 3'}, {name: 'Algo'}, {name: 'Logic'}, {name: 'Report'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'OOP'}, {name: 'Assembly'}, {name: 'Probability'}, {name: 'Files'}, {name: 'Math 4'}
            ]
          }],
      },
      {
        name: 'Year 3',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DB'}, {name: 'AI'}, {name: 'Networks'}, {name: 'OS'}, {name: 'Graphics'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SWE'}, {name: 'SAAD'}, {name: 'OODP'}, {name: 'Testing'}, {name: 'SWRE'}
            ]
          }],
      },
      {
        name: 'Year 4',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'SPM'}, {name: 'Web'}, {name: 'Image'}, {name: 'SDA'}, {name: 'GP'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'UI'}, {name: 'Cloud'}, {name: 'Safety'}, {name: 'Maintenance'}, {name: 'GP'}
            ]
          }],
      },
    ],
  },
  {
    name: 'AI',
    children: [
      {
        name: 'Year 1',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'Intro to Computer'}, {name: 'Math 1'}, {name: 'Physics 1'}, {name: 'English 1'}, {name: 'Humanities'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SP'}, {name: 'Math 2'}, {name: 'Physics 2'}, {name: 'English 2'}, {name: 'Ethics'}
            ]
          }],
      },
      {
        name: 'Year 2',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DS'}, {name: 'Math 3'}, {name: 'Algo'}, {name: 'Logic'}, {name: 'Report'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'OOP'}, {name: 'Assembly'}, {name: 'Probability'}, {name: 'Files'}, {name: 'Math 4'}
            ]
          }],
      },
      {
        name: 'Year 3',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DB'}, {name: 'AI'}, {name: 'Networks'}, {name: 'OS'}, {name: 'Graphics'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SWE'}, {name: 'SAAD'}, {name: 'OODP'}, {name: 'Testing'}, {name: 'SWRE'}
            ]
          }],
      },
      {
        name: 'Year 4',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'SPM'}, {name: 'Web'}, {name: 'Image'}, {name: 'SDA'}, {name: 'GP'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'UI'}, {name: 'Cloud'}, {name: 'Safety'}, {name: 'Maintenance'}, {name: 'GP'}
            ]
          }],
      },
    ],
  },
  {
    name: 'Bio',
    children: [
      {
        name: 'Year 1',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'Intro to Computer'}, {name: 'Math 1'}, {name: 'Physics 1'}, {name: 'English 1'}, {name: 'Humanities'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SP'}, {name: 'Math 2'}, {name: 'Physics 2'}, {name: 'English 2'}, {name: 'Ethics'}
            ]
          }],
      },
      {
        name: 'Year 2',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DS'}, {name: 'Math 3'}, {name: 'Algo'}, {name: 'Logic'}, {name: 'Report'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'OOP'}, {name: 'Assembly'}, {name: 'Probability'}, {name: 'Files'}, {name: 'Math 4'}
            ]
          }],
      },
      {
        name: 'Year 3',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DB'}, {name: 'AI'}, {name: 'Networks'}, {name: 'OS'}, {name: 'Graphics'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SWE'}, {name: 'SAAD'}, {name: 'OODP'}, {name: 'Testing'}, {name: 'SWRE'}
            ]
          }],
      },
      {
        name: 'Year 4',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'SPM'}, {name: 'Web'}, {name: 'Image'}, {name: 'SDA'}, {name: 'GP'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'UI'}, {name: 'Cloud'}, {name: 'Safety'}, {name: 'Maintenance'}, {name: 'GP'}
            ]
          }],
      },
    ],
  },
  {
    name: 'Cyber Security',
    children: [
      {
        name: 'Year 1',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'Intro to Computer'}, {name: 'Math 1'}, {name: 'Physics 1'}, {name: 'English 1'}, {name: 'Humanities'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SP'}, {name: 'Math 2'}, {name: 'Physics 2'}, {name: 'English 2'}, {name: 'Ethics'}
            ]
          }],
      },
      {
        name: 'Year 2',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DS'}, {name: 'Math 3'}, {name: 'Algo'}, {name: 'Logic'}, {name: 'Report'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'OOP'}, {name: 'Assembly'}, {name: 'Probability'}, {name: 'Files'}, {name: 'Math 4'}
            ]
          }],
      },
      {
        name: 'Year 3',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DB'}, {name: 'AI'}, {name: 'Networks'}, {name: 'OS'}, {name: 'Graphics'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SWE'}, {name: 'SAAD'}, {name: 'OODP'}, {name: 'Testing'}, {name: 'SWRE'}
            ]
          }],
      },
      {
        name: 'Year 4',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'SPM'}, {name: 'Web'}, {name: 'Image'}, {name: 'SDA'}, {name: 'GP'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'UI'}, {name: 'Cloud'}, {name: 'Safety'}, {name: 'Maintenance'}, {name: 'GP'}
            ]
          }],
      },
    ],
  },
  {
    name: 'Multimedia',
    children: [
      {
        name: 'Year 1',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'Intro to Computer'}, {name: 'Math 1'}, {name: 'Physics 1'}, {name: 'English 1'}, {name: 'Humanities'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SP'}, {name: 'Math 2'}, {name: 'Physics 2'}, {name: 'English 2'}, {name: 'Ethics'}
            ]
          }],
      },
      {
        name: 'Year 2',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DS'}, {name: 'Math 3'}, {name: 'Algo'}, {name: 'Logic'}, {name: 'Report'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'OOP'}, {name: 'Assembly'}, {name: 'Probability'}, {name: 'Files'}, {name: 'Math 4'}
            ]
          }],
      },
      {
        name: 'Year 3',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'DB'}, {name: 'AI'}, {name: 'Networks'}, {name: 'OS'}, {name: 'Graphics'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'SWE'}, {name: 'SAAD'}, {name: 'OODP'}, {name: 'Testing'}, {name: 'SWRE'}
            ]
          }],
      },
      {
        name: 'Year 4',
        children: [
          {
            name: 'Semester 1',
            children: [
                {name: 'SPM'}, {name: 'Web'}, {name: 'Image'}, {name: 'SDA'}, {name: 'GP'}
            ]
          },
          {
            name: 'Semester 2',
            children: [
              {name: 'UI'}, {name: 'Cloud'}, {name: 'Safety'}, {name: 'Maintenance'}, {name: 'GP'}
            ]
          }],
      },
    ],
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
  }

}
