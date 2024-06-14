import ReactTable from '@jswork/react-table/src';
import './index.css';
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

  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <h1>react-table</h1>
      <ReactTable
        className="w-50 my-2 bg-white border border-solid border-gray-200 text-center"
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default App;
