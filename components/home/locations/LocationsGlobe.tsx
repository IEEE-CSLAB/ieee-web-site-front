"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function LocationsGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1.0, 1.0, 1.0], // White base
      markerColor: [0, 0.5, 0.9], // Blue markers
      glowColor: [0.8, 0.8, 0.8], // Blue glow
      markers: [
        // North America - USA & Canada
        { location: [40.7128, -74.0060], size: 0.05 }, // New York, USA (Headquarters)
        { location: [40.5689, -74.4517], size: 0.05 }, // Piscataway, NJ, USA (Operations Center)
        { location: [33.8014, -118.0711], size: 0.05 }, // Los Alamitos, CA, USA (California Office)
        { location: [38.9072, -77.0369], size: 0.05 }, // Washington, DC, USA
        { location: [42.3601, -71.0589], size: 0.05 }, // Boston, MA, USA
        { location: [33.7490, -84.3880], size: 0.05 }, // Atlanta, GA, USA
        { location: [41.8781, -87.6298], size: 0.05 }, // Chicago, IL, USA
        { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco, CA, USA
        { location: [37.3382, -121.8863], size: 0.05 }, // San Jose, CA, USA
        { location: [34.0522, -118.2437], size: 0.05 }, // Los Angeles, CA, USA
        { location: [47.6062, -122.3321], size: 0.05 }, // Seattle, WA, USA
        { location: [29.7604, -95.3698], size: 0.05 }, // Houston, TX, USA
        { location: [32.7767, -96.7970], size: 0.05 }, // Dallas, TX, USA
        { location: [30.2672, -97.7431], size: 0.05 }, // Austin, TX, USA
        { location: [40.4406, -79.9959], size: 0.05 }, // Pittsburgh, PA, USA
        { location: [39.9526, -75.1652], size: 0.05 }, // Philadelphia, PA, USA
        { location: [32.0809, -81.0912], size: 0.05 }, // Savannah, GA, USA
        { location: [35.2271, -80.8431], size: 0.05 }, // Charlotte, NC, USA
        { location: [25.7617, -80.1918], size: 0.05 }, // Miami, FL, USA
        { location: [39.7392, -104.9903], size: 0.05 }, // Denver, CO, USA
        { location: [44.9778, -93.2650], size: 0.05 }, // Minneapolis, MN, USA
        { location: [43.6532, -79.3832], size: 0.05 }, // Toronto, Canada
        { location: [45.5017, -73.5673], size: 0.05 }, // Montreal, Canada
        { location: [49.2827, -123.1207], size: 0.05 }, // Vancouver, Canada
        { location: [51.0447, -114.0719], size: 0.05 }, // Calgary, Canada
        { location: [53.5461, -113.4938], size: 0.05 }, // Edmonton, Canada
        { location: [45.4215, -75.6972], size: 0.05 }, // Ottawa, Canada

        // Europe
        { location: [51.5074, -0.1278], size: 0.05 }, // London, UK
        { location: [52.4862, -1.8904], size: 0.05 }, // Birmingham, UK
        { location: [53.4808, -2.2426], size: 0.05 }, // Manchester, UK
        { location: [55.9533, -3.1883], size: 0.05 }, // Edinburgh, UK
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris, France
        { location: [45.7640, 4.8357], size: 0.05 }, // Lyon, France
        { location: [43.2965, 5.3698], size: 0.05 }, // Marseille, France
        { location: [52.5200, 13.4050], size: 0.05 }, // Berlin, Germany
        { location: [48.1351, 11.5820], size: 0.05 }, // Munich, Germany
        { location: [50.1109, 8.6821], size: 0.05 }, // Frankfurt, Germany
        { location: [51.2277, 6.7735], size: 0.05 }, // Düsseldorf, Germany
        { location: [53.5511, 9.9937], size: 0.05 }, // Hamburg, Germany
        { location: [48.7758, 9.1829], size: 0.05 }, // Stuttgart, Germany
        { location: [40.4168, -3.7038], size: 0.05 }, // Madrid, Spain
        { location: [41.3851, 2.1734], size: 0.05 }, // Barcelona, Spain
        { location: [41.9028, 12.4964], size: 0.05 }, // Rome, Italy
        { location: [45.4642, 9.1900], size: 0.05 }, // Milan, Italy
        { location: [43.7696, 11.2558], size: 0.05 }, // Florence, Italy
        { location: [40.8518, 14.2681], size: 0.05 }, // Naples, Italy
        { location: [52.3676, 4.9041], size: 0.05 }, // Amsterdam, Netherlands
        { location: [51.9225, 4.4772], size: 0.05 }, // Rotterdam, Netherlands
        { location: [50.8503, 4.3517], size: 0.05 }, // Brussels, Belgium
        { location: [47.3769, 8.5417], size: 0.05 }, // Zurich, Switzerland
        { location: [46.2044, 6.1432], size: 0.05 }, // Geneva, Switzerland
        { location: [48.2082, 16.3738], size: 0.05 }, // Vienna, Austria
        { location: [55.7558, 37.6173], size: 0.05 }, // Moscow, Russia
        { location: [59.9343, 30.3351], size: 0.05 }, // St. Petersburg, Russia
        { location: [55.0084, 82.9357], size: 0.05 }, // Novosibirsk, Russia
        { location: [59.9343, 10.7161], size: 0.05 }, // Oslo, Norway
        { location: [55.6761, 12.5683], size: 0.05 }, // Copenhagen, Denmark
        { location: [59.3293, 18.0686], size: 0.05 }, // Stockholm, Sweden
        { location: [60.1699, 24.9384], size: 0.05 }, // Helsinki, Finland
        { location: [52.2297, 21.0122], size: 0.05 }, // Warsaw, Poland
        { location: [50.0755, 14.4378], size: 0.05 }, // Prague, Czech Republic
        { location: [47.4979, 19.0402], size: 0.05 }, // Budapest, Hungary
        { location: [44.4268, 26.1025], size: 0.05 }, // Bucharest, Romania
        { location: [42.6977, 23.3219], size: 0.05 }, // Sofia, Bulgaria
        { location: [37.9838, 23.7275], size: 0.05 }, // Athens, Greece
        { location: [38.7223, -9.1393], size: 0.05 }, // Lisbon, Portugal

        // Middle East & Africa - Turkey (IEEE Turkey Section - 50+ universities)
        { location: [41.0082, 28.9784], size: 0.05 }, // Istanbul, Turkey (ITU, Boğaziçi, Yıldız, Sabancı, Koç, Bilgi, vb.)
        { location: [39.9334, 32.8597], size: 0.05 }, // Ankara, Turkey (METU, Hacettepe, Bilkent, Ankara Üniversitesi, vb.)
        { location: [38.4237, 27.1428], size: 0.05 }, // Izmir, Turkey (Ege, Dokuz Eylül, IYTE, İzmir Ekonomi, vb.)
        { location: [40.1826, 29.0665], size: 0.05 }, // Bursa, Turkey
        { location: [39.7767, 30.5206], size: 0.05 }, // Eskişehir, Turkey (Eskişehir Teknik Üniversitesi)
        { location: [36.8841, 30.7056], size: 0.05 }, // Antalya, Turkey
        { location: [40.7667, 29.9167], size: 0.05 }, // Gebze/Kocaeli, Turkey (Gebze Teknik Üniversitesi)
        { location: [37.0662, 37.3833], size: 0.05 }, // Gaziantep, Turkey
        { location: [36.9914, 35.3308], size: 0.05 }, // Adana, Turkey
        { location: [37.8746, 32.4932], size: 0.05 }, // Konya, Turkey
        { location: [41.0015, 28.9752], size: 0.05 }, // Istanbul (Asian side - Sabancı, Koç)
        { location: [40.7769, 29.9311], size: 0.05 }, // Kocaeli, Turkey
        { location: [40.9833, 29.1167], size: 0.05 }, // Sakarya, Turkey
        { location: [37.7833, 29.0833], size: 0.05 }, // Denizli, Turkey
        { location: [39.6484, 27.8826], size: 0.05 }, // Balıkesir, Turkey
        { location: [37.2153, 28.3636], size: 0.05 }, // Muğla, Turkey
        { location: [40.1553, 26.4142], size: 0.05 }, // Çanakkale, Turkey
        { location: [41.6772, 26.5556], size: 0.05 }, // Edirne, Turkey
        { location: [38.7312, 35.4787], size: 0.05 }, // Kayseri, Turkey
        { location: [41.2867, 36.3300], size: 0.05 }, // Samsun, Turkey
        { location: [38.3554, 38.3335], size: 0.05 }, // Malatya, Turkey
        { location: [39.9056, 41.2656], size: 0.05 }, // Erzurum, Turkey
        { location: [37.9144, 40.2306], size: 0.05 }, // Diyarbakır, Turkey
        { location: [36.8000, 34.6333], size: 0.05 }, // Mersin, Turkey
        { location: [41.0082, 39.7200], size: 0.05 }, // Trabzon, Turkey
        { location: [35.2433, 33.0000], size: 0.05 }, // Northern Cyprus (METU NCC)

        // Middle East & Africa - Other
        { location: [25.2048, 55.2708], size: 0.05 }, // Dubai, UAE
        { location: [24.4539, 54.3773], size: 0.05 }, // Abu Dhabi, UAE
        { location: [30.0444, 31.2357], size: 0.05 }, // Cairo, Egypt
        { location: [31.2001, 29.9187], size: 0.05 }, // Alexandria, Egypt
        { location: [31.7683, 35.2137], size: 0.05 }, // Jerusalem, Israel
        { location: [32.0853, 34.7818], size: 0.05 }, // Tel Aviv, Israel
        { location: [33.8938, 35.5018], size: 0.05 }, // Beirut, Lebanon
        { location: [33.3152, 44.3661], size: 0.05 }, // Baghdad, Iraq
        { location: [35.6892, 51.3890], size: 0.05 }, // Tehran, Iran
        { location: [24.7136, 46.6753], size: 0.05 }, // Riyadh, Saudi Arabia
        { location: [21.4858, 39.1925], size: 0.05 }, // Jeddah, Saudi Arabia
        { location: [-26.2041, 28.0473], size: 0.05 }, // Johannesburg, South Africa
        { location: [-33.9249, 18.4241], size: 0.05 }, // Cape Town, South Africa
        { location: [-25.7479, 28.2293], size: 0.05 }, // Pretoria, South Africa
        { location: [1.2921, 36.8219], size: 0.05 }, // Nairobi, Kenya
        { location: [6.5244, 3.3792], size: 0.05 }, // Lagos, Nigeria

        // Asia - India (IEEE India Section - 100+ universities)
        { location: [12.9716, 77.5946], size: 0.05 }, // Bangalore, India (IEEE India Office)
        { location: [19.0760, 72.8777], size: 0.05 }, // Mumbai, India
        { location: [28.6139, 77.2090], size: 0.05 }, // Delhi, India
        { location: [13.0827, 80.2707], size: 0.05 }, // Chennai, India
        { location: [22.5726, 88.3639], size: 0.05 }, // Kolkata, India
        { location: [18.5204, 73.8567], size: 0.05 }, // Pune, India
        { location: [17.3850, 78.4867], size: 0.05 }, // Hyderabad, India
        { location: [26.9124, 75.7873], size: 0.05 }, // Jaipur, India
        { location: [23.0225, 72.5714], size: 0.05 }, // Ahmedabad, India
        { location: [12.2958, 76.6394], size: 0.05 }, // Mysore, India
        { location: [19.2183, 72.9781], size: 0.05 }, // Thane, India
        { location: [26.4499, 80.3319], size: 0.05 }, // Lucknow, India
        { location: [30.7333, 76.7794], size: 0.05 }, // Chandigarh, India
        { location: [22.2587, 71.1924], size: 0.05 }, // Rajkot, India
        { location: [10.7905, 78.7047], size: 0.05 }, // Trichy, India
        { location: [11.0168, 76.9558], size: 0.05 }, // Coimbatore, India

        // Asia - China & East Asia
        { location: [39.9042, 116.4074], size: 0.05 }, // Beijing, China (IEEE China Office)
        { location: [22.5431, 114.0579], size: 0.05 }, // Shenzhen, China
        { location: [31.2304, 121.4737], size: 0.05 }, // Shanghai, China
        { location: [30.5728, 104.0668], size: 0.05 }, // Chengdu, China
        { location: [23.1291, 113.2644], size: 0.05 }, // Guangzhou, China
        { location: [30.5928, 114.3055], size: 0.05 }, // Wuhan, China
        { location: [32.0603, 118.7969], size: 0.05 }, // Nanjing, China
        { location: [29.5630, 106.5516], size: 0.05 }, // Chongqing, China
        { location: [36.6512, 117.1201], size: 0.05 }, // Jinan, China
        { location: [38.0428, 114.5149], size: 0.05 }, // Shijiazhuang, China
        { location: [22.3193, 114.1694], size: 0.05 }, // Hong Kong
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo, Japan (IEEE Japan Office)
        { location: [34.6937, 135.5023], size: 0.05 }, // Osaka, Japan
        { location: [35.0116, 135.7681], size: 0.05 }, // Kyoto, Japan
        { location: [35.1815, 136.9066], size: 0.05 }, // Nagoya, Japan
        { location: [43.0642, 141.3469], size: 0.05 }, // Sapporo, Japan
        { location: [37.5665, 126.9780], size: 0.05 }, // Seoul, South Korea
        { location: [35.1796, 129.0756], size: 0.05 }, // Busan, South Korea
        { location: [36.3504, 127.3845], size: 0.05 }, // Daejeon, South Korea
        { location: [25.0330, 121.5654], size: 0.05 }, // Taipei, Taiwan
        { location: [24.1477, 120.6736], size: 0.05 }, // Taichung, Taiwan

        // Asia - Southeast Asia & Pacific
        { location: [1.3521, 103.8198], size: 0.05 }, // Singapore (IEEE Asia-Pacific Office)
        { location: [13.7563, 100.5018], size: 0.05 }, // Bangkok, Thailand
        { location: [3.1390, 101.6869], size: 0.05 }, // Kuala Lumpur, Malaysia
        { location: [1.2966, 103.7764], size: 0.05 }, // Johor Bahru, Malaysia
        { location: [-6.2088, 106.8456], size: 0.05 }, // Jakarta, Indonesia
        { location: [-7.7956, 110.3695], size: 0.05 }, // Yogyakarta, Indonesia
        { location: [-6.9175, 107.6191], size: 0.05 }, // Bandung, Indonesia
        { location: [14.5995, 120.9842], size: 0.05 }, // Manila, Philippines
        { location: [10.3157, 123.8854], size: 0.05 }, // Cebu, Philippines
        { location: [16.4023, 120.5960], size: 0.05 }, // Baguio, Philippines
        { location: [10.8231, 106.6297], size: 0.05 }, // Ho Chi Minh City, Vietnam
        { location: [21.0285, 105.8542], size: 0.05 }, // Hanoi, Vietnam

        // Australia & New Zealand
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney, Australia
        { location: [-37.8136, 144.9631], size: 0.05 }, // Melbourne, Australia
        { location: [-27.4698, 153.0251], size: 0.05 }, // Brisbane, Australia
        { location: [-31.9505, 115.8605], size: 0.05 }, // Perth, Australia
        { location: [-34.9285, 138.6007], size: 0.05 }, // Adelaide, Australia
        { location: [-35.2809, 149.1300], size: 0.05 }, // Canberra, Australia
        { location: [-36.8485, 174.7633], size: 0.05 }, // Auckland, New Zealand
        { location: [-41.2865, 174.7762], size: 0.05 }, // Wellington, New Zealand
        { location: [-43.5321, 172.6362], size: 0.05 }, // Christchurch, New Zealand

        // Latin America
        { location: [19.4326, -99.1332], size: 0.05 }, // Mexico City, Mexico
        { location: [20.6597, -103.3496], size: 0.05 }, // Guadalajara, Mexico
        { location: [25.6866, -100.3161], size: 0.05 }, // Monterrey, Mexico
        { location: [-23.5505, -46.6333], size: 0.05 }, // Sao Paulo, Brazil
        { location: [-22.9068, -43.1729], size: 0.05 }, // Rio de Janeiro, Brazil
        { location: [-15.7942, -47.8822], size: 0.05 }, // Brasilia, Brazil
        { location: [-30.0346, -51.2177], size: 0.05 }, // Porto Alegre, Brazil
        { location: [-19.9167, -43.9345], size: 0.05 }, // Belo Horizonte, Brazil
        { location: [-8.0476, -34.8770], size: 0.05 }, // Recife, Brazil
        { location: [-34.6037, -58.3816], size: 0.05 }, // Buenos Aires, Argentina
        { location: [-31.4201, -64.1888], size: 0.05 }, // Cordoba, Argentina
        { location: [-33.4489, -70.6693], size: 0.05 }, // Santiago, Chile
        { location: [-12.0464, -77.0428], size: 0.05 }, // Lima, Peru
        { location: [4.7110, -74.0721], size: 0.05 }, // Bogota, Colombia
        { location: [6.2476, -75.5658], size: 0.05 }, // Medellin, Colombia
        { location: [10.3910, -75.4794], size: 0.05 }, // Cartagena, Colombia
        { location: [10.4806, -66.9036], size: 0.05 }, // Caracas, Venezuela
        { location: [-0.1807, -78.4678], size: 0.05 }, // Quito, Ecuador
        { location: [-2.1709, -79.9224], size: 0.05 }, // Guayaquil, Ecuador
        { location: [-25.2637, -57.5759], size: 0.05 }, // Asuncion, Paraguay
        { location: [-34.9011, -56.1645], size: 0.05 }, // Montevideo, Uruguay
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 flex items-center justify-center p-6 md:p-20 overflow-hidden relative">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            IEEE ile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Sınırları Aşın
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Dünyanın en büyük teknik organizasyonunun bir parçası olun.
            160&apos;tan fazla ülkede, 400.000&apos;den fazla üye ile teknoloji ve inovasyonun
            kalbinde yer alın.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-400 transition-colors group">
              <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center mb-4 text-gray-900 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">160+ Ülke</h3>
              <p className="text-gray-600 text-sm">Küresel erişim ve işbirliği ağı</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-indigo-300 transition-colors group">
              <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">400K+ Üye</h3>
              <p className="text-gray-600 text-sm">Dünyanın en büyük teknik topluluğu</p>
            </div>
          </div>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-200">
            Hemen Katıl
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </button>
        </div>

        {/* Right Content - Globe */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          {/* Glow effect removed */}
          <canvas
            ref={canvasRef}
            style={{
              width: 600,
              height: 600,
              maxWidth: "100%",
              aspectRatio: 1,
              filter: "drop-shadow(0 0 0 transparent)"
            }}
            className="cursor-grab active:cursor-grabbing"
          />
        </div>
      </div>
    </div>
  );
}
