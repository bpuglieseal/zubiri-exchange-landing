import { Bell, ChartSpline, Wallet, File, Brain, Lock } from "lucide-react";
import Card from "./card";
import Button from "./button";

export default function Benefits() {
    return (
        <section id="benefits" className="mt-32">
            <div className="flex flex-col gap-5 items-center justify-center mt-24">
                <div className="max-w-5/12">
                    <h2 className="text-4xl font-semibold text-center">
                        Powerful features built for crypto confidence
                    </h2>
                </div>
                <div className="max-w-8/12">
                    <p className="text-xl text-center text-[rgb(204,204,204)]">
                        Streamline your experience with tools designed to keep you secure, informed, and in control — every step of the way.
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <div className="columns-3 gap-7 space-y-7">
                    <Card icon={<Wallet />} title="Instant transfers" description="Send and receive crypto in seconds, without delays or bottlenecks." />
                    <Card icon={<ChartSpline />} title="Risk analysis" description="Stay ahead of the market with smart insights into potential risks." />
                    <Card icon={<Bell />} title="Real-time alerts" description="Get notified instantly about price moves, trends, and key events." />
                    <Card icon={<File />} title="Tax Optimization" description="Automate reports and minimise your tax burden with built-in tools." />
                    <Card icon={<Brain />} title="Autopilot mode" description="Let smart algorithms manage your assets while you stay hands-off." />
                    <Card icon={<Lock />} title="Maximum security" description="Protect your funds with top-tier encryption and multi-layer defences." />
                </div>
            </div>
            <div className="mt-24 columns-2 flex gap-6 items-center">
                <div className="space-y-6 pr-6">
                    <h2 className="text-4xl font-semibold">
                        Stay on top of market moves in real time
                    </h2>
                    <p className="text-xl text-[rgb(204,204,204)]">
                        Track live price changes, market shifts, and key events as they happen. Never miss an opportunity or a critical update again.
                    </p>
                    <Button>Get Started</Button>
                </div>
                <div className="hidden min-w-fit min-h-fit md:flex justify-end">
                    <img src="market.png" alt="Market" />
                </div>
            </div>
        </section>
    );
}