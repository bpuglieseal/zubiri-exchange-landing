import Marquee from "react-fast-marquee";

const TickerImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <li className="mr-8 flex justify-center items-center">
      <img src={src} alt={alt} className="w-28 md:w-24" />
    </li>
  );
};

export default function Ticker() {
  return (
    <div
      className="flex flex-row items-center justify-center mb-10 opacity-70 p-3"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <Marquee gradient speed={50} gradientColor="hsl(0, 0%, 1%)">
        <TickerImage src="/zubiri-exchange-landing/cosmos.png" alt="Cosmos" />
        <TickerImage
          src="/zubiri-exchange-landing/etherum.png"
          alt="Ethereum"
        />
        <TickerImage src="/zubiri-exchange-landing/solana.png" alt="Solana" />
        <TickerImage src="/zubiri-exchange-landing/stacks.png" alt="Stacks" />
        <TickerImage src="/zubiri-exchange-landing/polygon.png" alt="Polygon" />
      </Marquee>
    </div>
  );
}
