import { TICKER_ITEMS } from "../../data";

export function Ticker() {
  const ticker = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker" aria-label="Skills and highlights">
      <div className="ticker-track">
        {ticker.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item} <b>✳</b>
          </span>
        ))}
      </div>
    </div>
  );
}