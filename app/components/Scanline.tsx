export default function Scanline() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
            <div className="w-full h-[100px] bg-gradient-to-b from-transparent via-white/5 to-transparent absolute top-0 left-0 animate-scan" />
        </div>
    );
}
