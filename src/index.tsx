import {DataTableColumn, createTablePlugin} from 'flipper-plugin';

type Data = {
  id: string;
  name: string;
  event: string;
  index: number | undefined;
  value: string | undefined;
};

const columns: DataTableColumn<Data>[] = [
  {
    key: 'id',
    width: 150,
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'event',
    title: 'Event',
  },
  {
    key: 'index',
    title: 'Index',
  },
  {
    key: 'value',
    title: 'Value',
  },
];

const {plugin, Component} = createTablePlugin<Data>({
  columns,
  method: 'newData',
  key: 'id',
});
export {plugin, Component};
