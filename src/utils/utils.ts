export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}

export function formatPhone(phone: string) {
  return phone.replace(
    /(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/,
    "+$1 ($2) $3 $4-$5"
  );
}
