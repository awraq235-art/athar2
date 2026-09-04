import React from 'react';

interface AtharLogoProps {
  variant?: 'full' | 'horizontal' | 'emblem' | 'badge';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isDark?: boolean;
}

export const AtharLogo: React.FC<AtharLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  isDark = false,
}) => {
  // Dimensions mapping for the central emblem graphic
  const emblemSizes = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  /**
   * The Official Athar Cooperative Emblem SVG
   * Faithfully reproduced from the official identity:
   * 1. Calligraphic "أثر" with 3 sprouting green leaves extending from the Alif
   * 2. Serif tracked "ATHAR"
   * 3. Agricultural landscape crest with terraced green fields and irrigation canal
   * 4. Double crescent swoosh framing in forest green & vibrant lime
   */
  const renderOfficialEmblem = (customClass?: string) => (
    <div
      className={`relative select-none shrink-0 transition-transform ${customClass || emblemSizes[size]}`}
      title="الشعار الرسمي المعتمد لجمعية أثر التعاونية الزراعية متعددة الأغراض - ترخيص 87 لعام 2019 (وزارة الشؤون الاجتماعية والعمل)"
    >
      <svg
        viewBox="0 0 400 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          <linearGradient id="atharLeafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8DC63F" />
            <stop offset="100%" stopColor="#68A51C" />
          </linearGradient>

          <linearGradient id="atharLeftHill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#227D3B" />
            <stop offset="100%" stopColor="#145A27" />
          </linearGradient>

          <linearGradient id="atharRightHill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84C62C" />
            <stop offset="100%" stopColor="#6AA71E" />
          </linearGradient>

          <linearGradient id="atharRoad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15552B" />
            <stop offset="100%" stopColor="#0B381A" />
          </linearGradient>

          <clipPath id="crestShieldClip">
            <path d="M 110 135 C 110 115, 290 115, 290 135 C 300 185, 250 250, 200 250 C 150 250, 100 185, 110 135 Z" />
          </clipPath>
        </defs>

        {/* 1. TOP SECTION: SPROUTING LEAVES & "أثـر" + "ATHAR" */}
        <g id="calligraphy-group">
          {/* Sprouting 3 Fresh Leaves Branching from the Alif to the Left */}
          {/* Main sweeping lower leaf (الورقة السفلية الكبيرة الممتدة بانسيابية) */}
          <path
            d="M 145 78 C 115 72, 75 78, 38 88 C 22 93, 10 101, 4 110 C 8 115, 20 115, 36 108 C 72 92, 112 87, 145 84 Z"
            fill="url(#atharLeafGreen)"
            stroke="#104A26"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M 143 80 C 105 85, 65 94, 16 108"
            fill="none"
            stroke="#104A26"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Upper left fresh leaf (الورقة العلوية المرتفعة) */}
          <path
            d="M 138 70 C 124 48, 108 32, 84 32 C 78 32, 75 36, 78 44 C 86 62, 106 74, 138 74 Z"
            fill="#8DC63F"
            stroke="#104A26"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M 136 71 C 116 58, 98 48, 80 38"
            fill="none"
            stroke="#104A26"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Small middle leaf bud (البرعم الأوسط) */}
          <path
            d="M 140 58 C 132 50, 118 46, 108 50 C 110 57, 122 63, 140 63 Z"
            fill="#A6D953"
            stroke="#104A26"
            strokeWidth="2"
          />

          {/* Arabic Calligraphy "أثــــر" */}
          {/* Hamza (همزة الألف) */}
          <path
            d="M 288 34 C 288 28, 294 23, 301 23 C 306 23, 309 26, 309 31 C 309 34, 304 38, 298 40 L 310 40 L 309 44 L 291 44 C 289 41, 288 38, 288 34 Z"
            fill="#104A26"
          />

          {/* Alif stem (ألف أثر) */}
          <path
            d="M 292 50 L 307 50 L 307 102 L 292 102 Z"
            fill="#104A26"
          />

          {/* Three dots above Tha (نقاط حرف الثاء الثلاث) */}
          <circle cx="254" cy="44" r="4.2" fill="#104A26" />
          <circle cx="267" cy="44" r="4.2" fill="#104A26" />
          <circle cx="260.5" cy="33" r="4.2" fill="#104A26" />

          {/* Tha body and baseline connecting to Raa (جسم حرف الثاء والمد المتصل بالراء) */}
          <path
            d="M 270 65 L 253 65 L 253 79 L 145 79 L 145 95 L 270 95 Z"
            fill="#104A26"
          />

          {/* Raa tail swooping below (انحناء حرف الراء) */}
          <path
            d="M 148 79 C 148 91, 143 105, 132 116 C 125 123, 115 127, 105 129 L 102 119 C 110 116, 118 111, 123 105 C 128 98, 130 90, 130 79 Z"
            fill="#104A26"
          />

          {/* Latin Typography "A T H A R" */}
          <text
            x="206"
            y="128"
            textAnchor="middle"
            fill="#104A26"
            fontSize="23"
            fontWeight="900"
            fontFamily="'Times New Roman', 'Baskerville', serif"
            letterSpacing="0.32em"
          >
            ATHAR
          </text>
        </g>

        {/* 2. CENTRAL SHIELD & AGRICULTURAL LANDSCAPE */}
        <g id="landscape-group">
          <g clipPath="url(#crestShieldClip)">
            {/* White sky background */}
            <rect x="100" y="110" width="200" height="150" fill="#FFFFFF" />

            {/* Tree canopies / Forest silhouette in horizon (أشجار الأفق) */}
            <path
              d="M 105 142 C 105 130, 118 122, 130 126 C 138 120, 154 122, 161 130 C 167 124, 183 126, 187 138 L 105 145 Z"
              fill="#134725"
            />
            <path
              d="M 220 138 C 228 124, 248 122, 260 130 C 268 122, 288 126, 296 140 L 220 145 Z"
              fill="#134725"
            />

            {/* Sunny right hillside (التلال الزراعية الفاتحة) */}
            <path
              d="M 155 145 Q 225 133, 298 162 L 298 260 L 155 260 Z"
              fill="url(#atharRightHill)"
            />

            {/* Dark green left terrace (المدرجات الزراعية الخضراء) */}
            <path
              d="M 105 142 Q 145 154, 190 166 L 190 260 L 105 260 Z"
              fill="url(#atharLeftHill)"
            />

            {/* Winding agricultural canal / highway (مسار الري والسيل الزراعي الممتد) */}
            <path
              d="M 174 142 Q 190 166, 198 182 Q 222 210, 274 242 L 234 254 Q 194 214, 178 190 Q 166 170, 162 142 Z"
              fill="url(#atharRoad)"
            />

            {/* Foreground terrace layers */}
            <path
              d="M 105 170 Q 141 186, 173 206 L 169 255 L 105 255 Z"
              fill="#257E3E"
            />
            <path
              d="M 214 186 Q 254 178, 298 198 L 298 255 L 210 255 Z"
              fill="#8FD32F"
            />
          </g>

          {/* Dynamic Double Crescent Swoosh Frame (الحواضن الهلالية الديناميكية) */}
          {/* Inner vibrant lime-green swoop (القوس الأخضر الليموني الداخلي) */}
          <path
            d="M 112 162 C 104 206, 148 256, 200 256 C 252 256, 296 206, 288 162 C 290 174, 284 218, 248 248 C 220 264, 180 264, 152 248 C 116 218, 110 174, 112 162 Z"
            fill="#8DC63F"
          />

          {/* Outer forest-green crescent swoosh (القوس الأخضر الداكن الخارجي المعتمد) */}
          <path
            d="M 92 138 C 84 206, 134 278, 200 278 C 266 278, 316 206, 308 138 C 312 166, 304 226, 260 266 C 228 288, 172 288, 140 266 C 96 226, 88 166, 92 138 Z"
            fill="#104A26"
          />
        </g>

        {/* 3. OPTIONAL OFFICIAL EMBEDDED TEXT (when viewed standalone) */}
        <g id="bottom-titles">
          <text
            x="200"
            y="318"
            textAnchor="middle"
            fill="#104A26"
            fontSize="16.5"
            fontWeight="900"
            fontFamily="'Cairo', 'Readex Pro', 'Tajawal', sans-serif"
          >
            جمعية أثر التعاونية الزراعية متعددة الأغراض
          </text>
          <text
            x="200"
            y="340"
            textAnchor="middle"
            fill="#104A26"
            fontSize="11.5"
            fontWeight="700"
            fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
          >
            Athar Agricultural Cooperative Association multi-purpose
          </text>
        </g>
      </svg>
    </div>
  );

  // Pure emblem graphic icon
  if (variant === 'emblem') {
    return renderOfficialEmblem();
  }

  // Compact badge
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2 bg-emerald-900/90 text-white px-3 py-1.5 rounded-2xl border border-emerald-700/60 shadow-xs ${className}`}>
        {renderOfficialEmblem('w-10 h-10')}
        <div className="text-right">
          <div className="font-extrabold text-xs text-amber-300 leading-tight">جمعية أَثَــر التعاونية</div>
          <div className="text-[10px] text-emerald-200">ترخيص رقم 87 لعام 2019 (وزارة الشؤون الاجتماعية والعمل)</div>
        </div>
      </div>
    );
  }

  // Full brand card with complete bilingual titles and official license
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center space-y-3 ${className}`}>
        {renderOfficialEmblem('w-28 h-28 sm:w-36 sm:h-36')}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-emerald-950'}`}>
              جمعية أثر التعاونية الزراعية
            </span>
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-full border border-amber-300">
              متعددة الأغراض
            </span>
          </div>
          <div className={`text-xs sm:text-sm font-bold ${isDark ? 'text-emerald-300' : 'text-emerald-800'}`}>
            Athar Agricultural Cooperative Association multi-purpose
          </div>
          <div className="flex items-center justify-center gap-2 text-xs pt-1.5 flex-wrap">
            <span className="bg-emerald-800/10 text-emerald-900 font-bold px-3 py-1 rounded-lg border border-emerald-700/20">
              ترخيص رقم (87) لعام 2019
            </span>
            <span className="text-stone-400">•</span>
            <span className="text-stone-600 font-semibold">
              صادر من وزارة الشؤون الاجتماعية والعمل
            </span>
            <span className="text-stone-400">•</span>
            <span className="text-amber-700 font-bold">
              "أثر يصنع نموًا"
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Horizontal layout for Header, navigation bars, and cards
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {renderOfficialEmblem('w-12 h-12 sm:w-14 sm:h-14')}
      <div className="text-right">
        <div className="flex items-center gap-2">
          <span className={`font-black text-base sm:text-lg leading-tight tracking-tight ${isDark ? 'text-white' : 'text-emerald-950'}`}>
            جمعية أَثَــر
          </span>
          <span className="text-[10px] font-bold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-md border border-amber-300 shrink-0">
            ترخيص 87 (2019)
          </span>
        </div>
        <div className={`text-[11px] font-medium leading-snug truncate max-w-[220px] sm:max-w-none ${isDark ? 'text-emerald-200' : 'text-stone-600'}`}>
          التعاونية الزراعية متعددة الأغراض
        </div>
        <div className="text-[10px] text-stone-400 font-medium">
          صادر من وزارة الشؤون الاجتماعية والعمل
        </div>
      </div>
    </div>
  );
};
