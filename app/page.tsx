import WatarWaveWrapper from "@/components/visual-effects/watar-wave-wrapper";

export default function Home() {
  return (
    <WatarWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => <div className="h-screen">d</div>}
    </WatarWaveWrapper>
  );
}
