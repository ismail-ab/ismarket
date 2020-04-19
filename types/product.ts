export interface IProduct {
  title: string;
  updated_at: string;
  _tags: string[];
  handle: string;
  vendor: string;
  product_type: string;
  template_suffix?: string;
  sku: string;
  barcode: string;
  option1: string;
  option2: any;
  option3: any;
  position: number;
  requires_shipping: boolean;
  taxable: boolean;
  inventory_policy: string;
  inventory_quantity: number;
  inventory_management: string;
  id: number;
  tags: string[];
  option_names: any[];
  variants_count: number;
  variants_min_price: number;
  variants_max_price: number;
  product_image: string;
  published_at: string;
  body_html_safe?: string;
  variant_title: string;
  inventory_management_shopify: number;
  options: Options;
  price: number;
  compare_at_price: number;
  price_ratio: number;
  price_range: string;
  grams: number;
  weight: string;
  image: string;
  named_tags: NamedTags;
  named_tags_names: any[];
  created_at: string;
  collections: string[];
  collection_ids: number[];
  meta: Meta;
  objectID: string;
}

interface Options {}

interface NamedTags {}

interface Meta {
  finance: Finance;
  marketing?: Marketing;
}

interface Finance {
  unit_price: number;
}

interface Marketing {
  etiquettable_score: number;
  yuka_score: number;
}
