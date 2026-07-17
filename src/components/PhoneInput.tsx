import { countryCodes } from "@/lib/countryCodes";

const fieldClasses =
  "rounded-xl border border-border bg-surface-2 px-3 text-sm text-text-primary outline-none focus:border-border-strong focus:ring-2 focus:ring-dorado/30";

export function PhoneInput({
  id,
  countryValue,
  numberValue,
  onCountryChange,
  onNumberChange,
  required,
}: {
  id: string;
  countryValue: string;
  numberValue: string;
  onCountryChange: (dial: string) => void;
  onNumberChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex gap-2">
      <select
        id={`${id}-pais`}
        aria-label="País"
        value={countryValue}
        onChange={(e) => onCountryChange(e.target.value)}
        required={required}
        className={`${fieldClasses} h-11 w-[130px] shrink-0`}
      >
        <option value="" disabled>
          País
        </option>
        {countryCodes.map((c) => (
          <option key={`${c.iso}-${c.dial}`} value={c.dial}>
            {c.flag} {c.dial} {c.name}
          </option>
        ))}
      </select>
      <input
        id={id}
        type="tel"
        inputMode="tel"
        value={numberValue}
        onChange={(e) => onNumberChange(e.target.value)}
        required={required}
        placeholder="Número"
        className={`${fieldClasses} h-11 flex-1`}
      />
    </div>
  );
}
