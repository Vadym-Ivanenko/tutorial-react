import { Counter } from './Counter/Counter';

/* const colorPickerOptions = [
  { label: 'red', color: red },
  { label: 'green', color: green },
  { label: 'blue', color: blue },
  { label: 'grey', color: grey },
  { label: 'pink', color: pink },
  { label: 'idigo', color: indigo },
]; */

export const App = () => {
  return (
    <>
      <Counter initialValue={10} />
    </>
  );
};
