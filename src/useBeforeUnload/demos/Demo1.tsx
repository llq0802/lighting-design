import useBeforeUnload from '..';

export default function Demo1() {
  useBeforeUnload(true, 'You have unsaved changes, are you sure?');

  return <div>Demo1</div>;
}
