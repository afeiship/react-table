import cx from 'classnames';
import React, { Component, HTMLAttributes, ReactNode } from 'react';
import nx from '@jswork/next';

const CLASS_NAME = 'react-table';

export interface Column {
  key: string;
  title?: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
}

export type ReactTableProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * The extended className for header.
   * @default ''
   */
  headerClassName?: string;
  /**
   * The extended className for body.
   * @default ''
   */
  bodyClassName?: string;
  /**
   * The unique key of row.
   */
  rowKey?: string;
  /**
   * The columns of table.
   * @default []
   */
  columns: Column[];
  /**
   * The data source of table.
   */
  dataSource?: any[];
  /**
   * The render function of table row.
   * @param row
   */
  template?: (row: any, columns: Column[], rowKey: string | number) => ReactNode;
  /**
   * The footer view of table.
   */
  footer?: ReactNode;
} & HTMLAttributes<HTMLTableElement>;

const defaultTemplate = (row: any, columns: Column[], rowKey: string) => {
  const rows = columns.map((item) => {
    const { key } = item;
    const label = nx.get(row, key);
    return <td key={key}>{label}</td>;
  });
  return <tr key={nx.get(row, rowKey)}>{rows}</tr>;
};

export default class ReactTable extends Component<ReactTableProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    rowKey: 'id',
    columns: [],
    dataSource: [],
    template: defaultTemplate,
  };

  get cols() {
    const { columns } = this.props;
    return columns.map((item) => {
      const { key, width } = item;
      return (
        <col key={key} style={{ width }} />
      );
    });
  }

  get headers() {
    const { columns } = this.props;
    return columns.map((item) => {
      const { title, key, width, align } = item;
      const label = title || key;
      return (
        <th key={key} style={{ width, textAlign: align }}>{label}</th>
      );
    });
  }

  get rows() {
    const { dataSource, columns, rowKey, template } = this.props;
    return dataSource?.map((item, index) => {
      const key = nx.get(item, rowKey!) || index;
      return template?.(item, columns, key);
    });
  }

  render() {
    const {
      className,
      headerClassName,
      bodyClassName,
      rowKey,
      children,
      columns,
      dataSource,
      template,
      footer,
      ...rest
    } = this.props;

    return (
      <table data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        <colgroup>{this.cols}</colgroup>
        <thead className={cx(`${CLASS_NAME}__header`, headerClassName)}>
        <tr>{this.headers}</tr>
        </thead>
        <tbody className={cx(`${CLASS_NAME}__body`, bodyClassName)}>
        {this.rows}
        </tbody>
        {footer && <tfoot>{footer}</tfoot>}
      </table>
    );
  }
}
