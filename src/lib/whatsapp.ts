export const WHATSAPP_PRIMARY = "5548998437993";
export const WHATSAPP_SECONDARY = "5548998183667";

export const WHATSAPP_PRIMARY_DISPLAY = "(48) 99843-7993";
export const WHATSAPP_SECONDARY_DISPLAY = "(48) 99818-3667";

/** Monta um link wa.me com mensagem pré-preenchida opcional. */
export function waLink(text?: string, number: string = WHATSAPP_PRIMARY) {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
