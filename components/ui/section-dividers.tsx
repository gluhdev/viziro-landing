'use client';

export const WaveDivider = ({ color = "fill-slate-900", flip = false }: { color?: string; flip?: boolean }) => {
  return (
    <div className={`relative w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="absolute bottom-0 w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className={color}
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export const DiagonalDivider = ({ color = "bg-slate-900", flip = false }: { color?: string; flip?: boolean }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`absolute inset-0 ${color} ${flip ? 'origin-top-right -skew-y-3' : 'origin-top-left skew-y-3'}`}
        style={{ height: '100px' }}
      />
    </div>
  );
};

export const CurveDivider = ({ color = "fill-slate-900" }: { color?: string }) => {
  return (
    <div className="relative w-full">
      <svg
        className="absolute bottom-0 w-full h-32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className={color}
          fillOpacity="1"
          d="M0,224L1440,32L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export const ZigzagDivider = ({ color = "stroke-slate-900" }: { color?: string }) => {
  return (
    <div className="relative w-full h-16">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          className={color}
          strokeWidth="3"
          fill="none"
          d="M0,50 L40,20 L80,50 L120,20 L160,50 L200,20 L240,50 L280,20 L320,50 L360,20 L400,50 L440,20 L480,50 L520,20 L560,50 L600,20 L640,50 L680,20 L720,50 L760,20 L800,50 L840,20 L880,50 L920,20 L960,50 L1000,20 L1040,50 L1080,20 L1120,50 L1160,20 L1200,50 L1240,20 L1280,50 L1320,20 L1360,50 L1400,20 L1440,50"
        />
      </svg>
    </div>
  );
};

export const TiltDivider = ({ fromColor = "from-slate-900", toColor = "to-slate-800" }: { fromColor?: string; toColor?: string }) => {
  return (
    <div className="relative w-full h-24 -mt-12">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${fromColor} ${toColor} transform -skew-y-2`}
      />
    </div>
  );
};