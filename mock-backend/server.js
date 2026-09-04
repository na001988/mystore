const http = require("http")
const { URL } = require("url")

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const REGION = {
  id: "reg_1",
  name: "Europe",
  currency_code: "eur",
  countries: [
    { iso_2: "gb", name: "United Kingdom", display_name: "United Kingdom" },
    { iso_2: "de", name: "Germany", display_name: "Germany" },
    { iso_2: "dk", name: "Denmark", display_name: "Denmark" },
    { iso_2: "se", name: "Sweden", display_name: "Sweden" },
    { iso_2: "fr", name: "France", display_name: "France" },
    { iso_2: "es", name: "Spain", display_name: "Spain" },
    { iso_2: "it", name: "Italy", display_name: "Italy" },
  ],
}

const COLLECTIONS = [
  { id: "col_1", handle: "shirts", title: "Shirts" },
  { id: "col_2", handle: "sweatshirts", title: "Sweatshirts" },
  { id: "col_3", handle: "pants", title: "Pants" },
  { id: "col_4", handle: "merch", title: "Merch" },
]

const CATEGORIES = [
  { id: "cat_1", handle: "shirts", name: "Shirts", is_active: true, category_children: [], parent_category: null },
  { id: "cat_2", handle: "sweatshirts", name: "Sweatshirts", is_active: true, category_children: [], parent_category: null },
  { id: "cat_3", handle: "pants", name: "Pants", is_active: true, category_children: [], parent_category: null },
  { id: "cat_4", handle: "merch", name: "Merch", is_active: true, category_children: [], parent_category: null },
]

const SIZES = ["S", "M", "L", "XL"]

function makeProduct(idx, title, handle, collectionId, categoryId, categoryHandle, price) {
  const seed = handle.replace(/[^a-z0-9]/gi, "")
  const imgUrl = `https://picsum.photos/seed/${seed}/800/1000`
  const variants = SIZES.map((size, i) => ({
    id: `var_${idx}_${i + 1}`,
    title: size,
    sku: `${handle.toUpperCase().replace(/-/g, "")}-${size}`,
    inventory_quantity: 100,
    allow_backorder: true,
    manage_inventory: true,
    options: [{ option_id: `opt_${idx}`, value: size }],
    calculated_price: {
      calculated_amount: price,
      original_amount: price,
      currency_code: "eur",
      calculated_price: { price_list_type: "default" },
    },
    images: [{ id: `img_v_${idx}_${i}`, url: imgUrl }],
  }))

  return {
    id: `prod_${idx}`,
    handle,
    title,
    subtitle: null,
    description: `A beautiful ${title.toLowerCase()} from our collection.`,
    thumbnail: imgUrl,
    images: [
      { id: `img_${idx}_1`, url: imgUrl },
      { id: `img_${idx}_2`, url: `https://picsum.photos/seed/${seed}2/800/1000` },
      { id: `img_${idx}_3`, url: `https://picsum.photos/seed/${seed}3/800/1000` },
    ],
    status: "published",
    variants,
    options: [
      {
        id: `opt_${idx}`,
        title: "Size",
        product_id: `prod_${idx}`,
        values: SIZES.map((s, i) => ({ id: `val_${idx}_${i + 1}`, value: s, option_id: `opt_${idx}` })),
      },
    ],
    collection_id: collectionId,
    categories: [{ id: categoryId, name: CATEGORIES.find((c) => c.id === categoryId)?.name, handle: categoryHandle }],
    tags: [],
    metadata: {},
    created_at: new Date(Date.now() - idx * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
  }
}

const PRODUCTS = [
  // Shirts (col_1, cat_1)
  makeProduct(1, "Medusa T-Shirt", "medusa-t-shirt", "col_1", "cat_1", "shirts", 1500),
  makeProduct(2, "Medusa Long Sleeve", "medusa-long-sleeve", "col_1", "cat_1", "shirts", 2000),
  makeProduct(3, "Medusa V-Neck", "medusa-v-neck", "col_1", "cat_1", "shirts", 1800),
  makeProduct(4, "Medusa Tank Top", "medusa-tank-top", "col_1", "cat_1", "shirts", 1600),
  // Sweatshirts (col_2, cat_2)
  makeProduct(5, "Medusa Hoodie", "medusa-hoodie", "col_2", "cat_2", "sweatshirts", 4500),
  makeProduct(6, "Medusa Crewneck", "medusa-crewneck", "col_2", "cat_2", "sweatshirts", 3500),
  makeProduct(7, "Medusa Zip Hoodie", "medusa-zip-hoodie", "col_2", "cat_2", "sweatshirts", 5000),
  makeProduct(8, "Medusa Sweatpants", "medusa-sweatpants", "col_2", "cat_2", "sweatshirts", 3000),
  // Pants (col_3, cat_3)
  makeProduct(9, "Medusa Jeans", "medusa-jeans", "col_3", "cat_3", "pants", 5500),
  makeProduct(10, "Medusa Chinos", "medusa-chinos", "col_3", "cat_3", "pants", 4500),
  makeProduct(11, "Medusa Shorts", "medusa-shorts", "col_3", "cat_3", "pants", 2500),
  makeProduct(12, "Medusa Cargo Pants", "medusa-cargo-pants", "col_3", "cat_3", "pants", 5000),
  // Merch (col_4, cat_4)
  makeProduct(13, "Medusa Mug", "medusa-mug", "col_4", "cat_4", "merch", 1200),
  makeProduct(14, "Medusa Tote Bag", "medusa-tote-bag", "col_4", "cat_4", "merch", 1500),
  makeProduct(15, "Medusa Sticker Pack", "medusa-sticker-pack", "col_4", "cat_4", "merch", 800),
  makeProduct(16, "Medusa Water Bottle", "medusa-water-bottle", "col_4", "cat_4", "merch", 2000),
]

// Mock customer
const MOCK_CUSTOMER = {
  id: "cust_1",
  email: "operator@medusa.org",
  first_name: "Operator",
  last_name: "User",
  phone: "+45 12 34 56 78",
  addresses: [
    {
      id: "addr_1",
      first_name: "Operator",
      last_name: "User",
      company: "Medusa",
      address_1: "Test Street 1",
      address_2: null,
      city: "Copenhagen",
      postal_code: "1000",
      province: null,
      country_code: "dk",
      phone: "+45 12 34 56 78",
      is_default_billing: true,
      is_default_shipping: true,
    },
  ],
  orders: [],
}

// Mock orders
const MOCK_ORDERS = [
  {
    id: "order_1",
    display_id: 1001,
    status: "completed",
    fulfillment_status: "fulfilled",
    payment_status: "captured",
    total: 3300,
    subtotal: 3300,
    currency_code: "eur",
    email: "operator@medusa.org",
    created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
    items: [
      {
        id: "order_item_1",
        quantity: 1,
        unit_price: 1500,
        total: 1500,
        product_title: "Medusa T-Shirt",
        variant_title: "M",
        thumbnail: "https://picsum.photos/seed/medusatshirt/800/1000",
        variant: { id: "var_1_2", title: "M", product: { id: "prod_1", handle: "medusa-t-shirt", title: "Medusa T-Shirt" } },
      },
      {
        id: "order_item_2",
        quantity: 1,
        unit_price: 1800,
        total: 1800,
        product_title: "Medusa V-Neck",
        variant_title: "L",
        thumbnail: "https://picsum.photos/seed/medusavneck/800/1000",
        variant: { id: "var_3_3", title: "L", product: { id: "prod_3", handle: "medusa-v-neck", title: "Medusa V-Neck" } },
      },
    ],
    shipping_address: {
      first_name: "Operator",
      last_name: "User",
      address_1: "Test Street 1",
      city: "Copenhagen",
      postal_code: "1000",
      country_code: "dk",
    },
  },
  {
    id: "order_2",
    display_id: 1002,
    status: "completed",
    fulfillment_status: "fulfilled",
    payment_status: "captured",
    total: 4500,
    subtotal: 4500,
    currency_code: "eur",
    email: "operator@medusa.org",
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    items: [
      {
        id: "order_item_3",
        quantity: 1,
        unit_price: 4500,
        total: 4500,
        product_title: "Medusa Hoodie",
        variant_title: "L",
        thumbnail: "https://picsum.photos/seed/medusahoodie/800/1000",
        variant: { id: "var_5_3", title: "L", product: { id: "prod_5", handle: "medusa-hoodie", title: "Medusa Hoodie" } },
      },
    ],
    shipping_address: {
      first_name: "Operator",
      last_name: "User",
      address_1: "Test Street 1",
      city: "Copenhagen",
      postal_code: "1000",
      country_code: "dk",
    },
  },
]

// In-memory cart store
const carts = new Map()

function makeCart(id, regionId) {
  return {
    id,
    region_id: regionId || REGION.id,
    region: REGION,
    items: [],
    total: 0,
    subtotal: 0,
    item_total: 0,
    item_subtotal: 0,
    shipping_subtotal: 0,
    discount_subtotal: 0,
    tax_total: 0,
    currency_code: "eur",
    email: null,
    shipping_address: null,
    billing_address: null,
    shipping_methods: [],
    promotions: [],
    customer_id: null,
  }
}

function recalcCart(cart) {
  cart.item_total = cart.items.reduce((s, i) => s + i.total, 0)
  cart.item_subtotal = cart.item_total
  cart.subtotal = cart.item_total
  cart.shipping_subtotal = 0
  cart.discount_subtotal = 0
  cart.tax_total = 0
  cart.total = cart.item_total
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function sendJSON(res, data, status = 200) {
  const body = JSON.stringify(data)
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
  })
  res.end(body)
}

function readBody(req) {
  return new Promise((resolve) => {
    let data = ""
    req.on("data", (c) => (data += c))
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {})
      } catch {
        resolve({})
      }
    })
  })
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------

const server = http.createServer(async (req, res) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return sendJSON(res, {}, 204)
  }

  console.log(`[mock] ${req.method} ${req.url}`)

  const parsed = new URL(req.url, `http://localhost:${PORT}`)
  const path = parsed.pathname
  const q = parsed.searchParams
  const method = req.method

  // Health
  if (path === "/health") return sendJSON(res, { status: "ok" })

  // --- Regions ---
  if (path === "/store/regions" && method === "GET") {
    return sendJSON(res, { regions: [REGION], count: 1, limit: 20, offset: 0 })
  }
  if (path.startsWith("/store/regions/") && method === "GET") {
    const id = path.split("/")[3]
    if (id === REGION.id) return sendJSON(res, { region: REGION })
    return sendJSON(res, { error: "Region not found" }, 404)
  }

  // --- Products ---
  if (path === "/store/products" && method === "GET") {
    let products = [...PRODUCTS]
    const handle = q.get("handle")
    const collectionId = q.get("collection_id")
    const categoryId = q.get("category_id")
    const limit = parseInt(q.get("limit") || "100", 10)
    const offset = parseInt(q.get("offset") || "0", 10)

    if (handle) products = products.filter((p) => p.handle === handle)
    if (collectionId) products = products.filter((p) => p.collection_id === collectionId)
    if (categoryId) products = products.filter((p) => p.categories?.some((c) => c.id === categoryId))

    const total = products.length
    const paged = products.slice(offset, offset + limit)
    return sendJSON(res, { products: paged, count: total, limit, offset })
  }
  if (path.startsWith("/store/products/") && method === "GET") {
    const id = path.split("/")[3]
    const product = PRODUCTS.find((p) => p.id === id)
    if (product) return sendJSON(res, { product })
    return sendJSON(res, { error: "Product not found" }, 404)
  }

  // --- Collections ---
  if (path === "/store/collections" && method === "GET") {
    const handle = q.get("handle")
    let cols = [...COLLECTIONS]
    if (handle) cols = cols.filter((c) => c.handle === handle)
    return sendJSON(res, { collections: cols, count: cols.length, limit: 100, offset: 0 })
  }
  if (path.startsWith("/store/collections/") && method === "GET") {
    const id = path.split("/")[3]
    const col = COLLECTIONS.find((c) => c.id === id || c.handle === id)
    if (col) return sendJSON(res, { collection: col })
    return sendJSON(res, { error: "Collection not found" }, 404)
  }

  // --- Categories ---
  if (path === "/store/product-categories" && method === "GET") {
    const handle = q.get("handle")
    let cats = [...CATEGORIES]
    if (handle) cats = cats.filter((c) => c.handle === handle)
    return sendJSON(res, { product_categories: cats, count: cats.length, limit: 100, offset: 0 })
  }
  if (path.startsWith("/store/product-categories/") && method === "GET") {
    const id = path.split("/")[3]
    const cat = CATEGORIES.find((c) => c.id === id || c.handle === id)
    if (cat) return sendJSON(res, { product_category: cat })
    return sendJSON(res, { error: "Category not found" }, 404)
  }

  // --- Product Options ---
  if (path === "/store/product-options" && method === "GET") {
    const options = PRODUCTS.flatMap((p) =>
      p.options.map((o) => ({
        ...o,
        product: { id: p.id, handle: p.handle },
        values: o.values,
      }))
    )
    return sendJSON(res, { product_options: options, count: options.length, limit: 100, offset: 0 })
  }

  // --- Carts ---
  if (path === "/store/carts" && method === "POST") {
    const body = await readBody(req)
    const id = `cart_${Date.now()}`
    const cart = makeCart(id, body.region_id)
    carts.set(id, cart)
    return sendJSON(res, { cart })
  }
  // Line items — MUST come before the generic cart POST handler
  if (path.match(/^\/store\/carts\/[^/]+\/line-items$/) && method === "POST") {
    const cartId = path.split("/")[3]
    const body = await readBody(req)
    const cart = carts.get(cartId) || makeCart(cartId, REGION.id)
    const variant = PRODUCTS.flatMap((p) => p.variants).find((v) => v.id === body.variant_id)
    if (variant) {
      const product = PRODUCTS.find((p) => p.variants.includes(variant))
      const qty = body.quantity || 1
      const unitPrice = variant.calculated_price.calculated_amount
      cart.items.push({
        id: `item_${Date.now()}`,
        variant_id: variant.id,
        quantity: qty,
        unit_price: unitPrice,
        original_unit_price: unitPrice,
        subtotal: unitPrice * qty,
        original_total: unitPrice * qty,
        total: unitPrice * qty,
        product_title: product?.title,
        product_handle: product?.handle,
        variant_title: variant.title,
        thumbnail: product?.thumbnail,
        created_at: new Date().toISOString(),
        variant: {
          id: variant.id,
          title: variant.title,
          manage_inventory: variant.manage_inventory,
          allow_backorder: variant.allow_backorder,
          options: variant.options,
          product: {
            id: product?.id,
            handle: product?.handle,
            title: product?.title,
            images: product?.images,
          },
        },
      })
      recalcCart(cart)
    }
    carts.set(cartId, cart)
    return sendJSON(res, { cart })
  }
  if (path.match(/^\/store\/carts\/[^/]+\/line-items\/[^/]+$/) && (method === "POST" || method === "DELETE")) {
    const cartId = path.split("/")[3]
    const lineId = path.split("/")[5]
    const cart = carts.get(cartId) || makeCart(cartId, REGION.id)
    if (method === "DELETE") {
      cart.items = cart.items.filter((i) => i.id !== lineId)
    } else {
      const body = await readBody(req)
      const item = cart.items.find((i) => i.id === lineId)
      if (item && body.quantity) {
        item.quantity = body.quantity
        item.total = item.unit_price * item.quantity
        item.subtotal = item.unit_price * item.quantity
        item.original_total = item.total
      }
    }
    recalcCart(cart)
    carts.set(cartId, cart)
    return sendJSON(res, { cart })
  }
  // Cart customer transfer — before generic POST
  if (path.match(/^\/store\/carts\/[^/]+\/customer$/) && method === "POST") {
    const cartId = path.split("/")[3]
    const cart = carts.get(cartId) || makeCart(cartId, REGION.id)
    cart.customer_id = MOCK_CUSTOMER.id
    carts.set(cartId, cart)
    return sendJSON(res, { cart })
  }
  if (path.startsWith("/store/carts/") && method === "GET") {
    const id = path.split("/")[3]
    const cart = carts.get(id)
    if (cart) return sendJSON(res, { cart })
    // Return an empty cart if not found (avoids errors)
    return sendJSON(res, { cart: makeCart(id, REGION.id) })
  }
  if (path.startsWith("/store/carts/") && method === "POST") {
    const id = path.split("/")[3]
    const body = await readBody(req)
    const cart = carts.get(id) || makeCart(id, REGION.id)
    // Update cart fields (region, email, addresses, promo_codes, etc.)
    if (body.region_id) cart.region_id = body.region_id
    if (body.email) cart.email = body.email
    if (body.shipping_address) cart.shipping_address = body.shipping_address
    if (body.billing_address) cart.billing_address = body.billing_address
    if (body.promo_codes) cart.promo_codes = body.promo_codes
    carts.set(id, cart)
    return sendJSON(res, { cart })
  }

  // --- Customer ---
  if (path === "/store/customers/me" && method === "GET") {
    const auth = req.headers.authorization
    if (!auth) return sendJSON(res, { error: "Unauthorized" }, 401)
    return sendJSON(res, { customer: MOCK_CUSTOMER })
  }
  if (path === "/store/customers" && method === "POST") {
    return sendJSON(res, { customer: MOCK_CUSTOMER })
  }
  if (path === "/store/customers/me" && method === "POST") {
    return sendJSON(res, { customer: MOCK_CUSTOMER })
  }

  // --- Shipping ---
  if (path === "/store/shipping-options" && method === "GET") {
    return sendJSON(res, { shipping_options: [] })
  }

  // --- Payment ---
  if (path === "/store/payment-providers" && method === "GET") {
    return sendJSON(res, { payment_providers: [] })
  }
  if (path.startsWith("/store/payment-collections") && method === "POST") {
    return sendJSON(res, { payment_collection: { id: "pc_1", payment_sessions: [] } })
  }

  // --- Orders ---
  if (path === "/store/orders" && method === "GET") {
    return sendJSON(res, { orders: MOCK_ORDERS, count: MOCK_ORDERS.length })
  }
  if (path.startsWith("/store/orders/") && method === "GET") {
    const id = path.split("/")[3]
    const order = MOCK_ORDERS.find((o) => o.id === id)
    if (order) return sendJSON(res, { order })
    return sendJSON(res, { error: "Order not found" }, 404)
  }

  // --- Auth ---
  if (path.startsWith("/auth/") && method === "POST") {
    if (path.includes("/register")) return sendJSON(res, { token: "mock_register_token" })
    if (path.includes("/verification")) return sendJSON(res, { token: "mock_token" })
    return sendJSON(res, { token: "mock_token" })
  }
  if (path === "/auth/session" && method === "DELETE") {
    return sendJSON(res, {})
  }
  if (path === "/auth/token/refresh" && method === "POST") {
    return sendJSON(res, { token: "mock_token" })
  }

  // --- Locales (not configured → 404, handled by storefront) ---
  if (path === "/store/locales" && method === "GET") {
    return sendJSON(res, { error: "Not found" }, 404)
  }

  // Catch-all: return empty success to avoid breaking the UI
  console.log(`[mock] unhandled ${method} ${path}`)
  return sendJSON(res, {}, 200)
})

const PORT = 9000
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Mock Medusa backend running on http://0.0.0.0:${PORT}`)
})
