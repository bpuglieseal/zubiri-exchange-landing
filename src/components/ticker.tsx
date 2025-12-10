import Marquee from "react-fast-marquee";

export default function Ticker() {
  return (
    <ul className="flex flex-row items-center justify-center gap-10 mb-10 opacity-70">
      <Marquee>
        <li>
          <img src="/zubiri-exchange-landing/cosmos.png" alt="Cosmos" />
        </li>
        <li>
          <img src="/zubiri-exchange-landing/etherum.png" alt="Ethereum" />
        </li>
        <li>
          <img src="/zubiri-exchange-landing/solana.png" alt="Solana" />
        </li>
        <li>
          <img src="/zubiri-exchange-landing/stacks.png" alt="Stacks" />
        </li>
        <li>
          <img src="/zubiri-exchange-landing/polygon.png" alt="Polygon" />
        </li>
      </Marquee>
    </ul>
  );
}
