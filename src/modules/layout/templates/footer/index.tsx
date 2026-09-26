import { listCategories } from "@lib/data/categories";
import { listCollections } from "@lib/data/collections";
import { Text } from "@modules/common/components/ui";

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  });
  const productCategories = await listCategories();

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-10">
          {productCategories
            ?.filter((c) => !c.parent_category)
            ?.slice(0, 6)
            .map((c) => (
              <LocalizedClientLink
                key={c.id}
                className="txt-small-plus text-ui-fg-base hover:text-ui-fg-subtle uppercase"
                href={`/categories/${c.handle}`}
                data-testid="category-link"
              >
                {c.name}
              </LocalizedClientLink>
            ))}
          {collections?.slice(0, 6).map((c) => (
            <LocalizedClientLink
              key={c.id}
              className="txt-small-plus text-ui-fg-base hover:text-ui-fg-subtle uppercase"
              href={`/collections/${c.handle}`}
            >
              {c.title}
            </LocalizedClientLink>
          ))}
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  );
}
