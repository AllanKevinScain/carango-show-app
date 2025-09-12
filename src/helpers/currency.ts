const formatSomeNumber = (text: string | undefined) => {
  if (!text) return "";
  return text.replace(/[^0-9]/g, "");
};

const currencyIntlFormatter = (casasDecimais: number = 2) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: casasDecimais,
    maximumFractionDigits: casasDecimais,
  });

export function currencyFormatterForDinamicValues(
  valor: string,
  casasDecimais: number = 2
): string {
  const numeros = formatSomeNumber(valor);

  const centavos = Number(numeros) / Math.pow(10, casasDecimais);
  return currencyIntlFormatter(casasDecimais)
    .format(centavos)
    .replace("R$", "")
    .trim();
}

interface CurrencyFormatInterface {
  value: number;
  showR$?: boolean;
  qtyDecimal?: number;
}

export function currencyFormatterForFixValues(
  props: CurrencyFormatInterface
): string {
  const { value, showR$ = false, qtyDecimal = 2 } = props;

  const formatedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: qtyDecimal,
    maximumFractionDigits: qtyDecimal,
  });

  return !showR$
    ? formatedValue.format(value).replace("R$", "").trim()
    : formatedValue.format(value);
}
