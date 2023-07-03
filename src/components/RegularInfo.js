import './RegularInfo.scss';

const RegularInfo = () => {
  return (
    <div className="regularInfo">
      <div className="delivary">
        <div className="title">배송안내</div>
        <ul>
          <li className="subTitle">배송사</li>
          <li>꿀빵이와 앙꼬</li>
        </ul>
        <ul>
          <li className="subTitle">배송비</li>
          <li>3,000원 (30,000원 이상 구매 시 무료배송)</li>
          <li>도서, 산간 일부지역은 배송비가 추가될 수 있습니다.</li>
        </ul>
        <ul>
          <li className="subTitle">배송기간</li>
          <li>오후 1시 이전 결제완료시 당일 출고 (영업일 기준)</li>
        </ul>
      </div>
      <div className="exchange">
        <div className="title">교환안내</div>
        <ul>
          <li>주문 취소 및 배송지 변경은 “결제완료” 단계에서만 가능합니다.</li>
          <li>(마이페이지에서 취소 또는 변경하실 수 있습니다.)</li>
          <li>
            "상품준비중" 단계에서는 주문 취소 및 배송지 변경이 불가합니다.
          </li>
          <li>교환 및 반품은 배송완료 후 7일 이내에 가능합니다.</li>
        </ul>
      </div>
      <div className="refund">
        <div className="title">환불안내</div>
        <ul>
          <li>
            주문취소 및 반품 시 환불은 주문 시 이용하신 결제수단으로 2~7 영업일
            이내 환불됩니다.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegularInfo;
