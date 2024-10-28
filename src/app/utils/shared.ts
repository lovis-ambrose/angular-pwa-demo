export interface SyntaxNode {
  label: string;
  data?: string;
  children?: SyntaxNode[];
}
