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
          <span className="uswds-devtools-component-label__flag">🇺🇸</span>
        </div>
      ))}
    </div>
  );
}
