export function SemiCircularProgress({ value }: { value: number }) {
    const size = 200;
    const strokeWidth = 16;
    const primaryColor = "stroke-blue-500";
    const secondaryColor = "stroke-gray-200";

    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = Math.PI * radius;
    const progressOffset = circumference - (value / 100) * circumference;

    const generateTicks = () => {
        const ticks = [];
        for (let i = 0; i <= 100; i++) {
            const angle = (i * 180) / 100;
            const x1 = center + (radius - 12) * Math.cos((angle * Math.PI) / 180);
            const y1 = center - (radius - 12) * Math.sin((angle * Math.PI) / 180);
            const x2 = center + (radius - 14) * Math.cos((angle * Math.PI) / 180);
            const y2 = center - (radius - 14) * Math.sin((angle * Math.PI) / 180);

            ticks.push(<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-gray-400" strokeWidth={0.5} />);
        }
        return ticks;
    };

    return (
    <div className="relative w-48 h-24">
        <svg className="w-full h-full" viewBox={`0 0 ${size} ${size / 2}`}>
            {/* Tick Marks */}
            {
                generateTicks()
            }

            {/* Background Arc */}
            <path
                d={`M ${strokeWidth / 2} ${center} A ${radius} ${radius} 0 0 1 ${ size - strokeWidth / 2 } ${center}`}
                fill="none"
                className={`${secondaryColor}`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />

            {/* Progress Arc */}
            <path
                d={`M ${strokeWidth / 2} ${center} A ${radius} ${radius} 0 0 1 ${ size - strokeWidth / 2 } ${center}`}
                fill="none"
                className={`${primaryColor}`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
            />
        </svg>
        <div className="absolute inset-0 flex items-end justify-center">
            <span className="text-5xl font-bold text-gray-800">{Math.round(value)}</span>
        </div>
    </div>
  );
}
