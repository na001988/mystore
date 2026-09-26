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
        <div className="flex flex-col items-start py-10 gap-y-4">
          <span className="txt-small-plus text-ui-fg-base uppercase font-semibold">
            Categories
          </span>
          <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2">
            {productCategories
              ?.filter((c) => !c.parent_category)
              ?.slice(0, 10)
              .map((c) => (
                <LocalizedClientLink
                  key={c.id}
                  className="txt-small text-ui-fg-subtle hover:text-ui-fg-base"
                  href={`/categories/${c.handle}`}
                  data-testid="category-link"
                >
                  {c.name}
                </LocalizedClientLink>
              ))}
          </div>
          <span className="txt-small-plus text-ui-fg-base uppercase font-semibold mt-2">
            Collections
          </span>
          <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2">
            {collections?.slice(0, 10).map((c) => (
              <LocalizedClientLink
                key={c.id}
                className="txt-small text-ui-fg-subtle hover:text-ui-fg-base"
                href={`/collections/${c.handle}`}
              >
                {c.title}
              </LocalizedClientLink>
            ))}
          </div>
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
