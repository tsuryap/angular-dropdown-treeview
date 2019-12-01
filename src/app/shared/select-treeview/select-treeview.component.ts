import { Component, OnInit, ViewChild, ElementRef, Input, Output } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-treeview',
  templateUrl: './select-treeview.component.html',
  styleUrls: ['./select-treeview.component.scss']
})
export class SelectTreeviewComponent implements OnInit {
  @ViewChild('filter', {static: true})
  targetElement: ElementRef;

  @Input()
  dropDownHeight = 300;
  
  @Input()
  treeData;
 
  @Input()
  selection: TreeNode;

  @Output()
  selectionChange = new EventEmitter();

 

  visible: boolean = false;
  id: any = Math.floor(Math.random() * 1000);
  firstTimeLoad = true;
  dropDownEl;
  constructor() { }

  ngOnInit() {
  }

  click(event) {

    if(this.firstTimeLoad) {
      this.dropDownEl = document.getElementById(this.id)
      document.body.appendChild(this.dropDownEl);
      this.firstTimeLoad = false
    }
    this.showDropDown();
  }
  /**
   * This method will set postion of drop down to the target element
   * Here target is select box;
   */
  setPosition() {
    const el: Element = this.targetElement.nativeElement;
    const position = el.getBoundingClientRect();
    this.dropDownEl.style.top = position.height + position.top + 'px';
    this.dropDownEl.style.left = position.left + 'px';
    this.dropDownEl.style.width = position.width + 'px';
    this.dropDownEl.style.height = this.dropDownHeight + 'px';
  }

  /**
   * On click on select box shows drop down
   */
  showDropDown() {
    this.visible = !this.visible;
    this.setPosition();
  }

  
  nodeSelect(event) {
    this.visible = false;
    this.selection = event.node;
    this.selectionChange.emit(event.node);
  }

}
