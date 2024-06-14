# react-table
> React data table.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-table
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-table/dist/style.css";

  // or use sass
  @import "~@jswork/react-table/dist/style.scss";
  ```
2. import js
  ```js
  import ReactTable from '@jswork/react-table';
  import './index.scss';
  import '@jswork/react-table/dist/style.scss';

  function App() {
    const columns = [
      { key: 'name' },
      { key: 'age' },
    ];
    const data = [
      { id: 1, name: 'John', age: 28 },
      { id: 2, name: 'Jane', age: 32 },
      { id: 3, name: 'Bob', age: 23 },
    ];

    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <h1>react-table</h1>
        <ReactTable
          className="wp-4 mx-auto my-2"
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-table/

## license
Code released under [the MIT license](https://github.com/afeiship/react-table/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-table
[version-url]: https://npmjs.org/package/@jswork/react-table

[license-image]: https://img.shields.io/npm/l/@jswork/react-table
[license-url]: https://github.com/afeiship/react-table/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-table
[size-url]: https://github.com/afeiship/react-table/blob/master/dist/react-table.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-table
[download-url]: https://www.npmjs.com/package/@jswork/react-table
