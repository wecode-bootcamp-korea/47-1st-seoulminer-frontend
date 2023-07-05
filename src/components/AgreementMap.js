import './AgreementMap.scss';

const AgreementMap = ({ data, checked, handleChecked }) => {
  const { id, name, explanation } = data;

  return (
    <div className="container">
      <div className="line">
        <div className="full">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={e => handleChecked(e)}
          />
          <p>{name}</p>
        </div>
      </div>
      <div className="hidden">{explanation}</div>
    </div>
  );
};

export default AgreementMap;
