export type CountryCode = {
  name: string;
  iso: string;
  dial: string;
  flag: string;
};

// Hispanohablantes primero (audiencia principal), luego el resto por orden alfabético.
export const countryCodes: CountryCode[] = [
  { name: "Estados Unidos", iso: "US", dial: "+1", flag: "🇺🇸" },
  { name: "México", iso: "MX", dial: "+52", flag: "🇲🇽" },
  { name: "España", iso: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Argentina", iso: "AR", dial: "+54", flag: "🇦🇷" },
  { name: "Bolivia", iso: "BO", dial: "+591", flag: "🇧🇴" },
  { name: "Chile", iso: "CL", dial: "+56", flag: "🇨🇱" },
  { name: "Colombia", iso: "CO", dial: "+57", flag: "🇨🇴" },
  { name: "Costa Rica", iso: "CR", dial: "+506", flag: "🇨🇷" },
  { name: "Cuba", iso: "CU", dial: "+53", flag: "🇨🇺" },
  { name: "Ecuador", iso: "EC", dial: "+593", flag: "🇪🇨" },
  { name: "El Salvador", iso: "SV", dial: "+503", flag: "🇸🇻" },
  { name: "Guatemala", iso: "GT", dial: "+502", flag: "🇬🇹" },
  { name: "Honduras", iso: "HN", dial: "+504", flag: "🇭🇳" },
  { name: "Nicaragua", iso: "NI", dial: "+505", flag: "🇳🇮" },
  { name: "Panamá", iso: "PA", dial: "+507", flag: "🇵🇦" },
  { name: "Paraguay", iso: "PY", dial: "+595", flag: "🇵🇾" },
  { name: "Perú", iso: "PE", dial: "+51", flag: "🇵🇪" },
  { name: "Puerto Rico", iso: "PR", dial: "+1", flag: "🇵🇷" },
  { name: "República Dominicana", iso: "DO", dial: "+1", flag: "🇩🇴" },
  { name: "Uruguay", iso: "UY", dial: "+598", flag: "🇺🇾" },
  { name: "Venezuela", iso: "VE", dial: "+58", flag: "🇻🇪" },
  // Otros países
  { name: "Alemania", iso: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Brasil", iso: "BR", dial: "+55", flag: "🇧🇷" },
  { name: "Canadá", iso: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Francia", iso: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Italia", iso: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Portugal", iso: "PT", dial: "+351", flag: "🇵🇹" },
  { name: "Reino Unido", iso: "GB", dial: "+44", flag: "🇬🇧" },
];
