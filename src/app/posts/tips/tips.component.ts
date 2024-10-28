import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SyntaxNode} from "../../utils/shared";
import {TreeModule} from "primeng/tree";
import {TreeNode} from "primeng/api";

@Component({
  selector: 'bb-tips',
  standalone: true,
  imports: [
    CommonModule,
    TreeModule,
  ],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.scss'
})
export class TipsComponent {
  @Input() activeTip: string = '';
  nodes: TreeNode[] = [
    {
      label: 'Commonly used syntax',
      data: { isHeader: true, headerLevel: 1 },
      children: [
        { label: 'Header', data: { isHeader: true, headerLevel: 6 } },
        { label: '_italics_ or __italics__', data: { isItalic: true } },
        { label: '**bold**', data: { isBold: true } },
        { label: '[Link](https://...)', data: { isLink: true, link: 'https://example.com' } },
        { label: '* item 1', children: [{ label: '* item 2' }] },
        { label: '1. item 1', children: [{ label: '2. item 2' }] },
        { label: '> quoted text' },
        { label: '`inline code`' },
        { label: '```\ncode block\n```', data: { isCode: true } }
      ]
    }
  ];
}
