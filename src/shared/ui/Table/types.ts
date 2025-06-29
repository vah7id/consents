export interface TableColumn<T> {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string | number;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  emptyMessage?: string;
} 