import './ProductInfo.scss';
const ProductInfo = () => {
  return (
    <div className="productInfo">
      <p className="wrap">상세설명</p>
      <div className="tableFull">
        <p className="tableName">상품상세정보</p>
        <div className="tables">
          {DETAIL_INFO.map(data => {
            return (
              <div className="table" key={data.id}>
                <div className="name">{data.name}</div>
                <div className="right">{data.explanation}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

const DETAIL_INFO = [
  {
    id: 1,
    name: '제품명',
    explanation: '상품상세설명참조',
  },
  {
    id: 2,
    name: '크기',
    explanation: '상품상세설명참조',
  },
  {
    id: 3,
    name: '제조사 및 수입자명',
    explanation: '상품상세설명참조',
  },
  {
    id: 4,
    name: '제조국',
    explanation: '상품상세설명참조',
  },
  {
    id: 5,
    name: '사용연령',
    explanation: '상품상세설명참조',
  },
];
