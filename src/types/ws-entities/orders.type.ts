export type Order = {
  associations?: { order_rows?: OrderRow[] };
  carrier_tax_rate: string;
  conversion_rate: string;
  current_state: string;
  date_add: string;
  date_upd: string;
  delivery_date: string;
  delivery_number: string;
  gift: string;
  gift_message: string;
  id: string;
  id_address_delivery: string;
  id_address_invoice: string;
  id_carrier: string;
  id_cart: string;
  id_currency: string;
  id_customer: string;
  id_lang: string;
  id_shop: string;
  id_shop_group: string;
  invoice_date: string;
  invoice_number: string;
  mobile_theme: string;
  module: string;
  note: string;
  payment: string;
  recyclable: string;
  reference: string;
  round_mode: string;
  round_type: string;
  secure_key: string;
  shipping_number: string;
  total_discounts: string;
  total_discounts_tax_excl: string;
  total_discounts_tax_incl: string;
  total_paid: string;
  total_paid_real: string;
  total_paid_tax_excl: string;
  total_paid_tax_incl: string;
  total_products: string;
  total_products_wt: string;
  total_shipping: string;
  total_shipping_tax_excl: string;
  total_shipping_tax_incl: string;
  total_wrapping: string;
  total_wrapping_tax_excl: string;
  total_wrapping_tax_incl: string;
  valid: string;
};

export type OrderRow = {
  id?: string;
  id_customization?: string;
  product_attribute_id: string;
  product_ean13?: string;
  product_id: string;
  product_isbn?: string;
  product_name?: string;
  product_price?: string;
  product_quantity: string;
  product_reference?: string;
  product_upc?: string;
  unit_price_tax_excl?: string;
  unit_price_tax_incl?: string;
};