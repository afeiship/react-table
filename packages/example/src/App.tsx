import ReactTable from '@jswork/react-table/src';
import './index.scss';
import '@jswork/react-table/src/style.scss';

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

  const template = (row, column, rowKey) => {
    return <tr key={rowKey}>
      <td colSpan={2} className="p-4">
        <div className="y-2 shadow hover:shadow-md bg-white rounded-lg p-4">
          <div className="x-2">
            <div className="text-left w-1/2">{row.name}</div>
            <div className="text-left w-1/2">{row.age}</div>
          </div>
          <footer>
            <button className="btn btn-sm btn-primary ml-auto w-full">Open</button>
            <div className="box">Hidden content.</div>
          </footer>
        </div>
      </td>
    </tr>;
  };

  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <h1>react-table</h1>
      <div className="debug-red wp-4 mx-auto my-2 rounded-lg overflow-hidden">
        <ReactTable
          className="w-full"
          columns={columns}
          dataSource={data}
          template={template}
        />
      </div>
    </div>
  );
}

export default App;
