import { useEffect, useState } from "react";

interface FoundComponent {
  label: string;
  url: string;
  top: number;
  left: number;
  position?: "fixed" | "absolute";
}

const componentMap: {
  [selector: string]: {
    label: string;
    url: string;
  };
} = {
  // Margin
  ".ds-u-margin--0": {
    label: "Margin 0",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin--05": {
    label: "Margin 0.5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin--1": {
    label: "Margin 1",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin--2": {
    label: "Margin 2",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin--3": {
    label: "Margin 3",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin--4": {
    label: "Margin 4",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin--5": {
    label: "Margin 5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin--6": {
    label: "Margin 6",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin--7": {
    label: "Margin 7",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
// Margin left and right
".ds-u-margin-x--0": {
    label: "Marginin L&R 0",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-x--05": {
    label: "Margin L&R 0.5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-x--1": {
    label: "Margin L&R 1",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-x--2": {
    label: "Margin L&R 2",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-x--3": {
    label: "Margin L&R 3",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-x--4": {
    label: "Margin L&R 4",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-x--5": {
    label: "Margin L&R 5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-x--6": {
    label: "Margin L&R 6",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-x--7": {
    label: "Margin L&R 7",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
// Margin top & bottom
  ".ds-u-margin-y--0": {
    label: "Marginin T&B 0",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-y--05": {
    label: "Margin T&B 0.5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-y--1": {
    label: "Margin T&B 1",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-y--2": {
    label: "Margin T&B 2",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-y--3": {
    label: "Margin T&B 3",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-y--4": {
    label: "Margin T&B 4",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-y--5": {
    label: "Margin T&B 5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-y--6": {
    label: "Margin T&B 6",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-y--7": {
    label: "Margin T&B 7",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
// Margin top
  ".ds-u-margin-top--0": {
    label: "Marginin Top 0",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-top--05": {
    label: "Margin Top 0.5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-top--1": {
    label: "Margin Top 1",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-top--2": {
    label: "Margin Top 2",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-top--3": {
    label: "Margin Top 3",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-top--4": {
    label: "Margin Top 4",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-top--5": {
    label: "Margin Top 5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-top--6": {
    label: "Margin Top 6",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-top--7": {
    label: "Margin Top 7",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
// Margin bottom
  ".ds-u-margin-bottom--0": {
    label: "Marginin bottom 0",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-bottom--05": {
    label: "Margin bottom 0.5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-bottom--1": {
    label: "Margin bottom 1",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-bottom--2": {
    label: "Margin bottom 2",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-bottom--3": {
    label: "Margin bottom 3",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-bottom--4": {
    label: "Margin bottom 4",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-bottom--5": {
    label: "Margin bottom 5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-bottom--6": {
    label: "Margin bottom 6",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-bottom--7": {
    label: "Margin bottom 7",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
// Margin left
  ".ds-u-margin-left--0": {
    label: "Marginin left 0",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-left--05": {
    label: "Margin left 0.5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-left--1": {
    label: "Margin left 1",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-left--2": {
    label: "Margin left 2",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-left--3": {
    label: "Margin left 3",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-left--4": {
    label: "Margin left 4",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-left--5": {
    label: "Margin left 5",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-left--6": {
    label: "Margin left 6",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
".ds-u-margin-left--7": {
    label: "Margin left 7",
    url: "https://design.cms.gov/utilities/margin/?query=ds-h3&theme=core",
  },
  
  // CMS styles
  ".ds-text-heading--5xl": {
    label: "Heading 5XL",
    url: "https://design.cms.gov/foundation/typography/headings/?theme=core",
  },
  ".ds-text-heading--4xl": {
    label: "Heading 4XL",
    url: "https://design.cms.gov/foundation/typography/headings/?theme=core",
  },
  ".ds-text-heading--3xl": {
    label: "Heading 3XL",
    url: "https://design.cms.gov/foundation/typography/headings/?theme=core",
  },
  ".ds-text-heading--2xl": {
    label: "Heading 2XL",
    url: "https://design.cms.gov/foundation/typography/headings/?theme=core",
  },
  ".ds-text-heading--xl": {
    label: "Heading XL",
    url: "https://design.cms.gov/foundation/typography/headings/?theme=core",
  },
  ".ds-text-heading--lg": {
    label: "Heading lg",
    url: "https://design.cms.gov/foundation/typography/headings/?theme=core",
  },
  ".ds-text-heading--md": {
    label: "Heading md",
    url: "https://design.cms.gov/foundation/typography/headings/?theme=core",
  },
  ".ds-text-heading--sm": {
    label: "Heading sm",
    url: "https://design.cms.gov/foundation/typography/headings/?theme=core",
  },
  ".ds-text-body--lg": {
    label: "Body lg",
    url: "https://design.cms.gov/foundation/typography/body/?theme=core",
  },
  ".ds-text-body--md": {
    label: "Body md",
    url: "https://design.cms.gov/foundation/typography/body/?theme=core",
  },
  ".ds-text-body--sm": {
    label: "Body sm",
    url: "https://design.cms.gov/foundation/typography/body/?theme=core",
  },
  ".ds-u-font-size--lg": {
    label: "Font size lg",
    url: "https://design.cms.gov/foundation/typography/body/?theme=core",
  },
  ".ds-h1": {
    label: "Utility H1",
    url: "https://design.cms.gov/migration-guides/agnostic-typography-classes/?query=ds-h3&theme=core",
  },
  ".ds-h2": {
    label: "Utility H2",
    url: "https://design.cms.gov/migration-guides/agnostic-typography-classes/?query=ds-h3&theme=core",
  },
  ".ds-h3": {
    label: "Utility H3",
    url: "https://design.cms.gov/migration-guides/agnostic-typography-classes/?query=ds-h3&theme=core",
  },
  ".ds-h4": {
    label: "Utility H4",
    url: "https://design.cms.gov/migration-guides/agnostic-typography-classes/?query=ds-h3&theme=core",
  },
  ".ds-h5": {
    label: "Utility H5",
    url: "https://design.cms.gov/migration-guides/agnostic-typography-classes/?query=ds-h3&theme=core",
  },
  ".ds-h6": {
    label: "Utility H6",
    url: "https://design.cms.gov/migration-guides/agnostic-typography-classes/?query=ds-h3&theme=core",
  },

  
  ".ds-c-step": {
    label: "Step list",
    url: "https://design.cms.gov/components/step-indicator/?theme=core",
  },

  ".ds-c-list": {
    label: "DS-c-List",
    url: "https://designsystem.digital.gov/components/list/",
  },
  ".ds-c-label": {
    label: "Label",
    url: "https://design.cms.gov/components/text-field/text-field/?theme=core",
  },
  ".ds-c-field": {
    label: "Field",
    url: "https://design.cms.gov/components/text-field/text-field/?theme=core",
  },
  ".ds-c-button": {
    label: "Button",
    url: "https://design.cms.gov/components/button/?theme=core",
  },
  ".ds-c-accordion": {
    label: "Accordion",
    url: "https://design.cms.gov/components/accordion/?theme=core",
  },
  ".ds-c-alert": {
    label: "Alert",
    url: "https://design.cms.gov/components/alert/?theme=core",
  },
  ".ds-c-autocomplete": {
    label: "Autocomplete",
    url: "https://design.cms.gov/components/autocomplete/?theme=core",
  },
  ".ds-c-badge": {
    label: "Badge",
    url: "https://design.cms.gov/components/badge/?theme=core",
  },
  ".ds-c-drawer__toggle": {
    label: "Drawer toggle",
    url: "https://design.cms.gov/components/drawer/?theme=core",
  },
  ".ds-c-dropdown": {
    label: "Dropdown",
    url: "https://design.cms.gov/components/dropdown/?theme=core",
  },

  ".ds-c-table": {
    label: "Table",
    url: "https://design.cms.gov/components/table/?theme=core",
  },


  // Healthcare
  ".hc-c-header": {
    label: "Header",
    url: "https://design.cms.gov/components/header/?theme=healthcare",
  },
  ".hc-c-footer": { 
    label: "Footer",
    url: "https://design.cms.gov/components/footer/?theme=healthcare",
  },
  ".m-c-header": {
    label: "Header",
    url: "https://design.cms.gov/components/header/?theme=medicare",
  },
  ".m-c-footer": { 
    label: "Footer",
    url: "https://design.cms.gov/components/footer/?theme=medicare",
  },


  ".ds-u-display--block": {
    label: "Display block",
    url: "https://design.cms.gov/utilities/display/?query=ds-h3&theme=core",
  },
  ".ds-u-display--flex": {
    label: "Display flex",
    url: "https://design.cms.gov/utilities/display/?query=ds-h3&theme=core",
  },
  ".ds-u-display--inline": {
    label: "Display inline",
    url: "https://design.cms.gov/utilities/display/?query=ds-h3&theme=core",
  },
  ".ds-u-display--inline-block": {
    label: "Display inline-block",
    url: "https://design.cms.gov/utilities/display/?query=ds-h3&theme=core",
  },
  "ds-c-vertical-nav": {
    label: "Vertical nav item",
    url: "https://design.cms.gov/components/vertical-nav/?theme=core",
  },

  //
  // USWDS styles
  //
  ".grid-container": {
    label: "Grid",
    url: "https://designsystem.digital.gov/components/grid/",
  },
  ".usa-accordion": {
    label: "Accordion",
    url: "https://designsystem.digital.gov/components/accordion/",
  },
  ".usa-alert": {
    label: "Alert",
    url: "https://designsystem.digital.gov/components/alert/",
  },
  ".usa-banner": {
    label: "Banner",
    url: "https://designsystem.digital.gov/components/banner/",
  },
  ".usa-breadcrumb": {
    label: "Breadcrumb",
    url: "https://designsystem.digital.gov/components/breadcrumb/",
  },
  ".usa-button": {
    label: "Button",
    url: "https://designsystem.digital.gov/components/button/",
  },
  ".usa-button-group": {
    label: "Button group",
    url: "https://designsystem.digital.gov/components/button-group/",
  },
  ".usa-card": {
    label: "Card",
    url: "https://designsystem.digital.gov/components/card/",
  },
  ".usa-character-count": {
    label: "Character count",
    url: "https://designsystem.digital.gov/components/character-count/",
  },
  ".usa-checkbox": {
    label: "Checkbox",
    url: "https://designsystem.digital.gov/components/checkbox/",
  },
  ".usa-collection": {
    label: "Collection",
    url: "https://designsystem.digital.gov/components/collection/",
  },
  ".usa-combo-box": {
    label: "Combo box",
    url: "https://designsystem.digital.gov/components/combo-box/",
  },
  ".usa-date-picker": {
    label: "Date picker",
    url: "https://designsystem.digital.gov/components/date-picker/",
  },
  ".usa-date-range-picker": {
    label: "Date range picker",
    url: "https://designsystem.digital.gov/components/date-range-picker/",
  },
  ".usa-file-input": {
    label: "File input",
    url: "https://designsystem.digital.gov/components/file-input/",
  },
  "footer.usa-footer": {
    label: "Footer",
    url: "https://designsystem.digital.gov/components/footer/",
  },
  ".usa-header": {
    label: "Header",
    url: "https://designsystem.digital.gov/components/header/",
  },
  ".usa-icon": {
    label: "Icon",
    url: "https://designsystem.digital.gov/components/icon/",
  },
  ".usa-icon-list": {
    label: "Icon list",
    url: "https://designsystem.digital.gov/components/icon-list/",
  },
  ".usa-masked": {
    label: "Input mask",
    url: "https://designsystem.digital.gov/components/input-mask/",
  },
  ".usa-input-prefix, usa-input-suffix": {
    label: "Input prefix/suffix",
    url: "https://designsystem.digital.gov/components/input-prefix-suffix/",
  },
  ".usa-identifier": {
    label: "Identifier",
    url: "https://designsystem.digital.gov/components/identifier/",
  },
  ".usa-in-page-nav": {
    label: "In Page Nav",
    url: "https://designsystem.digital.gov/components/in-page-navigation/",
  },
  ".usa-language-container": {
    label: "Language selector",
    url: "https://designsystem.digital.gov/components/language-selector/",
  },
  ".usa-memorable-date": {
    label: "Memorable date",
    url: "https://designsystem.digital.gov/components/memorable-date/",
  },
  ".usa-modal": {
    label: "Modal",
    url: "https://designsystem.digital.gov/components/modal/",
  },
  ".usa-pagination": {
    label: "Pagination",
    url: "https://designsystem.digital.gov/components/pagination/",
  },
  ".usa-process-list": {
    label: "Process List",
    url: "https://designsystem.digital.gov/components/process-list/",
  },
  ".usa-prose": {
    label: "Prose",
    url: "https://designsystem.digital.gov/components/prose/",
  },
  ".usa-radio": {
    label: "Radio",
    url: "https://designsystem.digital.gov/components/radio-buttons/",
  },
  ".usa-range": {
    label: "Range slider",
    url: "https://designsystem.digital.gov/components/range-slider/",
  },
  ".usa-search": {
    label: "Search",
    url: "https://designsystem.digital.gov/components/search/",
  },
  ".usa-select": {
    label: "Select",
    url: "https://designsystem.digital.gov/components/select/",
  },
  ".usa-sidenav": {
    label: "Side Nav",
    url: "https://designsystem.digital.gov/components/side-navigation/",
  },
  ".usa-site-alert": {
    label: "Site alert",
    url: "https://designsystem.digital.gov/components/site-alert/",
  },
  ".usa-step-indicator": {
    label: "Step indicator",
    url: "https://designsystem.digital.gov/components/step-indicator/",
  },
  ".usa-summary-box": {
    label: "Summary box",
    url: "https://designsystem.digital.gov/components/summary-box/",
  },
  ".usa-table": {
    label: "Table",
    url: "https://designsystem.digital.gov/components/table/",
  },
  ".usa-tag": {
    label: "Tag",
    url: "https://designsystem.digital.gov/components/tag/",
  },
  ".usa-input": {
    label: "Text input",
    url: "https://designsystem.digital.gov/components/text-input/",
  },
  ".usa-time-picker": {
    label: "Time picker",
    url: "https://designsystem.digital.gov/components/time-picker/",
  },
  ".usa-tooltip": {
    label: "Tooltip",
    url: "https://designsystem.digital.gov/components/tooltip/",
  },
};

function isHidden(el: HTMLElement) {
  // Recursively check if this element or any parent is hidden
  const styles = window.getComputedStyle(el);
  if (styles.display === "none" || styles.visibility === "hidden") {
    return true;
  }

  if (el.parentElement) {
    return isHidden(el.parentElement);
  }
}

/**
 * Scrapes the DOM for each component. If it finds a class, it places a label
 */
export function ComponentTags() {
  const [foundComponents, setFoundComponents] = useState<FoundComponent[]>([]);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setFoundComponents([]);

    const componentSelectors = Object.keys(componentMap);
    const newFoundComponents: FoundComponent[] = [];

    componentSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);

      Array.from(elements).forEach((element) => {
        if (isHidden(element as HTMLElement)) {
          return;
        }

        // Store the top and left position of the element
        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const left = rect.left + window.scrollX;
        newFoundComponents.push({
          label: componentMap[selector].label,
          url: componentMap[selector].url,
          top,
          left,
        });
      });

      // Make sure any labels that are on top of each other are offset
      // First sort by top position
      newFoundComponents.sort((a, b) => a.top - b.top);
      // Then offset any labels that share the same top and are within 30px of the left sides of each other
      newFoundComponents.forEach((component, index) => {
        if (
          index > 0 &&
          component.top - newFoundComponents[index - 1].top < 10 &&
          component.left - newFoundComponents[index - 1].left < 100
        ) {
          component.top += 30;
        }
      });

      setFoundComponents(newFoundComponents);
    });
  }, [screenWidth]);

  return (
    <div className="uswds-devtools-component-labels">
      {foundComponents.map((foundComponent) => (
        <div
          key={`${foundComponent.top}-${foundComponent.left}`}
          className="uswds-devtools-component-label"
          style={{
            top: foundComponent.top,
            left: foundComponent.left,
            position: foundComponent.position ?? "absolute",
          }}
        >
          <a href={foundComponent.url} target="_blank">
            {foundComponent.label}
          </a>
          {/* <span className="uswds-devtools-component-label__flag">🇺🇸</span> */}
        </div>
      ))}
    </div>
  );
}
