import img from './img/cat.webp';
export default function Cat({ x, y, price, money }) {
  return (
    <div>
      <div>我的价钱:{price}</div>
      <div>价值:{money}</div>
      <img src={img} style={{ width: '100px', height: '100px', borderRadius: '50%', position: 'absolute', left: `${x - 50}px`, top: `${y - 50}px` }} alt='' />
    </div>
  );
}
