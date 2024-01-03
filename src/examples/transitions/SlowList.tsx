const SlowList = function SlowList({ text }: any) {
  // Log once. The actual slowdown is inside Item.
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <Item />');

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<Item key={i} text={`${i}-${text}`} />);
  }

  let firstTime = Date.now();
  while (Date.now() < firstTime + 2500) {}

  return (
    <ul className="items">
      {items}
    </ul>
  );
};

function Item({ text }: any) {
  return (
    <li className="item">
      Text: {text}
    </li>
  )
}

export default SlowList;
