import { useEffect, useState } from "react";

interface FoundComponent {
  label: string;
  url: string;
  top: number;
  left: number;
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
  ".usa-banner": {
    label: "Banner",
    url: "https://designsystem.digital.gov/components/banner/",
  },
  ".usa-button": {
    label: "Button",
    url: "https://designsystem.digital.gov/components/button/",
  },
  "footer.usa-footer": {
    label: "Footer",
    url: "https://designsystem.digital.gov/components/footer/",
  },
  ".usa-header": {
    label: "Header",
    url: "https://designsystem.digital.gov/components/header/",
  },
  ".usa-identifier": {
    label: "Identifier",
    url: "https://designsystem.digital.gov/components/identifier/",
  },
  ".usa-in-page-nav": {
    label: "In Page Nav",
    url: "https://designsystem.digital.gov/components/in-page-navigation/",
  },
  ".usa-icon": {
    label: "Icon",
    url: "https://designsystem.digital.gov/components/icon/",
  },
  ".usa-process-list": {
    label: "Process List",
    url: "https://designsystem.digital.gov/components/process-list/",
  },
  ".usa-sidenav": {
    label: "Side Nav",
    url: "https://designsystem.digital.gov/components/side-navigation/",
  },
};

/**
 * Scrapes the DOM for each component. If it finds a class, it places a label
 */
export function Labeller() {
  const [foundComponents, setFoundComponents] = useState<FoundComponent[]>([]);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [pageUrl, setPageUrl] = useState<string>(window.location.href);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const handleUrlChange = () => {
    setPageUrl(window.location.href);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("popstate", handleUrlChange);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  useEffect(() => {
    setFoundComponents([]);

    const componentSelectors = Object.keys(componentMap);
    const newFoundComponents: FoundComponent[] = [];

    componentSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      console.log(`Found ${elements.length} ${selector} elements`);

      Array.from(elements).forEach((element) => {
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
          component.top === newFoundComponents[index - 1].top &&
          component.left - newFoundComponents[index - 1].left < 100
        ) {
          component.top += 30;
        }
      });

      setFoundComponents(newFoundComponents);
    });
  }, [screenWidth, pageUrl]);

  return (
    <div className="uswds-devtools-component-labels">
      {foundComponents.map((foundComponent) => (
        <div
          key={`${foundComponent.top}-${foundComponent.left}`}
          className="uswds-devtools-component-label"
          style={{
            top: foundComponent.top,
            left: foundComponent.left,
            position: "absolute",
          }}
        >
          🇺🇸
          <a href={foundComponent.url} target="_blank">
            {foundComponent.label}
          </a>
          🇺🇸
        </div>
      ))}
    </div>
  );
}
