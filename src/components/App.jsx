import { Counter } from './counter/Counter';
import { Dropdown } from './dropdown/Dropdown';
import { Colorpicker } from './colorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: 'red' },
  { label: 'green', color: 'green' },
  { label: 'blue', color: 'blue' },
  { label: 'grey', color: 'grey' },
  { label: 'pink', color: 'pink' },
  { label: 'idigo', color: 'indigo' },
];

export const App = () => {
  return (
    <>
      <Counter initialValue={10} />
      <Dropdown />
      <Colorpicker options={colorPickerOptions} />
    </>
  );
};
